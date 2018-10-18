(function() {

  'use strict';

  var ENTER_KEY = 13;
  var newTodoDom = document.getElementById('new-todo');
  var syncDom = document.getElementById('sync-wrapper');
  var exists = false;

  // EDITING STARTS HERE (you dont need to edit anything above this line)

  var db = new PouchDB('todos');
  var remotePouch = 'http://localhost:3002/todos';
  var remoteCouch = 'https://cebu.ml:6984/bishal';
  
  db.changes({
  since: 'now',
  live: true
  }).on('change', showTodos);

  // We have to create a new todo document and enter it in the database
  function addTodo(text) {
  var todo = {
    _id: text,
    title: text,
    completed: false,
    secured : false
  };
  db.put(todo).then(function callback(result) {
    console.log("All set");
    console.log(result);
  }).catch(function(err){
  console.log("Not storing");
  console.log(err);
  });
 }

  // Show the current list of todos by reading them from the database
  function showTodos() {
  db.allDocs({include_docs: true, descending: true}).then(function(doc) {
    console.log(doc);
    redrawTodosUI(doc.rows);
    
  }).catch(function(err){
    console.log(err)
  });
  db.viewCleanup().then(function (result) {
    console.log("clean up done ");
    console.log(result);
  }).catch(function (err) {
    console.log(err);
  });
 } 

  function checkboxChanged(todo, event) {
  todo.completed = event.target.checked;
  db.put(todo);
 }
  // User pressed the delete button for a todo, delete it
  function deleteButtonPressed(todo) {
  db.remove(todo);
 }

  // The input box when editing a todo has blurred, we should save
  // the new title or delete the todo if the title is empty
  function todoBlurred(todo, event) {
   var trimmedText = event.target.value.trim();
   if (!trimmedText) {
    db.remove(todo);
   } else {
    todo.title = trimmedText;
    db.put(todo);
   }
 }
  // Initialise a sync with the remote server
  function sync() {
  syncDom.setAttribute('data-sync-state', 'syncing');
  var opts = {live: true,retry: true};
  if(remoteCouch){
    exists = true;
  }else{
    exists = false;
  }

  if (exists) {
     /*db.transform({
       incoming: function (doc) {
        doc['secured']=true;
         return doc;
       },
       outgoing: function (doc) {
        doc['secured']=true;
         return doc;
       }
     });*/
     /*While using transform it works well too but the problem is the rev id doesnt change when you transform 
     for which when the data transfer happens while the remoteCouch is offline(https://cebu.ml:6984/bishal) 
     the data will not be secured as expected, after that the remoteCouch when comes online the data will show 
     secured true but the other databases which already has the data during offline state cant get the secured 
     field updated as the rev_id remains the same.But is some changes are made to the same data the secured field 
     will be updated (in this case it is if the task is completed by choosing the checked option).
     But this below method solves the problem and works seemlessly*/ 
     db.allDocs({include_docs: true, descending: true}).then(function(doc) {
      console.log(doc);
      var eachDoc =doc.rows;
      eachDoc.forEach(function(todo){
        var  docs = todo.doc;
        if(docs.secured!==true){
        docs.secured = true;
        console.log("Remote Couch is online");
        console.log(docs);
        }
        db.put(docs);
      })
     }).catch(function(err){
     console.log(err);
     }); 
     db.sync(remoteCouch,opts).then(function(err){
       console.log(err);
     })
      
     db.sync(remotePouch,opts,syncError);
    }else{  
    db.sync(remotePouch, opts, syncError);
    }
}

  // EDITING STARTS HERE (you dont need to edit anything below this line)

  // There was some form or error syncing
  function syncError() {
    syncDom.setAttribute('data-sync-state', 'error');
  }

  // User has double clicked a todo, display an input so they can edit the title
  function todoDblClicked(todo) {
    var div = document.getElementById('li_' + todo._id);
    var inputEditTodo = document.getElementById('input_' + todo._id);
    div.className = 'editing';
    inputEditTodo.focus();
  }

  // If they press enter while editing an entry, blur it to trigger save
  // (or delete)
  function todoKeyPressed(todo, event) {
    if (event.keyCode === ENTER_KEY) {
      var inputEditTodo = document.getElementById('input_' + todo._id);
      inputEditTodo.blur();
    }
  }

  // Given an object representing a todo, this will create a list item
  // to display it.
  function createTodoListItem(todo) {
    var checkbox = document.createElement('input');
    checkbox.className = 'toggle';
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', checkboxChanged.bind(this, todo));

    var label = document.createElement('label');
    label.appendChild( document.createTextNode(todo.title));
    label.addEventListener('dblclick', todoDblClicked.bind(this, todo));

    var deleteLink = document.createElement('button');
    deleteLink.className = 'destroy';
    deleteLink.addEventListener( 'click', deleteButtonPressed.bind(this, todo));

    var divDisplay = document.createElement('div');
    divDisplay.className = 'view';
    divDisplay.appendChild(checkbox);
    divDisplay.appendChild(label);
    divDisplay.appendChild(deleteLink);

    var inputEditTodo = document.createElement('input');
    inputEditTodo.id = 'input_' + todo._id;
    inputEditTodo.className = 'edit';
    inputEditTodo.value = todo.title;
    inputEditTodo.addEventListener('keypress', todoKeyPressed.bind(this, todo));
    inputEditTodo.addEventListener('blur', todoBlurred.bind(this, todo));

    var li = document.createElement('li');
    li.id = 'li_' + todo._id;
    li.appendChild(divDisplay);
    li.appendChild(inputEditTodo);

    if (todo.completed) {
      li.className += 'complete';
      checkbox.checked = true;
    }
    
    return li;
  }

  function redrawTodosUI(todos) {
    var ul = document.getElementById('todo-list');
    ul.innerHTML = '';
    todos.forEach(function(todo) {
      ul.appendChild(createTodoListItem(todo.doc));
    });
  }

  function newTodoKeyPressHandler( event ) {
    if (event.keyCode === ENTER_KEY) {
      addTodo(newTodoDom.value);
      newTodoDom.value = '';
    }
  }

  function addEventListeners() {
    newTodoDom.addEventListener('keypress', newTodoKeyPressHandler, false);
  }

  addEventListeners();
  showTodos();

  if (remotePouch) {
    sync();
  }

})();

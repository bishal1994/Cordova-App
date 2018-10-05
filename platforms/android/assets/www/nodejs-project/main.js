const cordova = require('cordova-bridge');

cordova.channel.on('message', function (msg) {
  console.log('[node] received:', msg);

  cordova.channel.send('Replying to this message: ' + msg);
});
var argv = require('minimist')(process.argv.slice(2));

var logLocation=argv.pouchlog;
var controlFileHandler=argv.controlfh;

var express = require('express')
var app = express()
var PouchDB = require('pouchdb')
let InMemPouchDB = PouchDB.defaults({db: require("memdown"), migrate: false})

app.use('', require('express-pouchdb')(InMemPouchDB, {mode:'minimumForPouchDB',logPath:logLocation}))
app.listen(3005)
var db = new InMemPouchDB('todos',{revs_limits: 1});
//var remoteCouch = 'http://admin:password@127.0.0.1:5984/todos';
//var remoteCouchSyncs = 'https://cebu.ml:6984/bishal'

/*
var i=0;
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";




'
   for (var i = 0; i < 1000000; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}



function add(){
var strings = makeid();
var todo = {
    _id: new Date().toISOString(),
    title: strings,
    completed: false
  };
  db.put(todo).then(function callback(result) {
    console.log("All set");
    console.log("putting"+result);
  }).catch(function(err){
  console.log("Not storing");
  console.log(err);
  });
  i++;
  setTimeout(add,10000);

}
console.log("size of each string is"+Buffer.byteLength(makeid(), 'utf8'));

setTimeout(add,10000);
*/
db.changes({live: true}).on('change', console.log);
this.db = db;
db.sync("http://192.168.104.195:3005/todos",{live:true ,retry:true});
 //db.sync(remoteCouch,{live:true ,retry:true});
 //db.sync(remoteCouchSyncs,{live:true ,retry:true});
 //db.sync(remote , {live:true , retry:true});
/*similar to the filter that I put in the client side do the necessary changes and you are good to go
note : remove the sync filter in the client side if you are implementing sync ( if needed to send the completed todos or you can keep it for further filtering of the completed todos
 db.sync('http://ip of the other device where you want to sync', {live: true, retry: true }
 db.sync('http://ip of the other device where you want to sync', {live: true, retry: true , filter:function(doc){

     return doc.completed === true;

     }
  }
  });
*/

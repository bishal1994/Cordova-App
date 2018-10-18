# CordovaAndroidApp


# Cordova Android

Cordova Android is an Android application library that allows for Cordova-based
projects to be built for the Android Platform. Cordova based applications are,
at the core, applications written with web technology: HTML, CSS and JavaScript.

[Apache Cordova](https://cordova.apache.org) is a project of The Apache Software Foundation (ASF).

## Requires

- Java JDK 1.8 or greater
- Android SDK [http://developer.android.com](http://developer.android.com)


## Cordova Android Developer Tools

We recommend using the [Cordova command-line tool](https://www.npmjs.com/package/cordova) to create projects and be able to easily install plugins.

However, the following scripts can be used instead:

    ./bin/create [path package activity] ... creates the ./example app or a cordova android project
    ./bin/check_reqs ....................... checks that your environment is set up for cordova-android development
    ./bin/update [path] .................... updates an existing cordova-android project to the version of the framework

These commands live in a generated Cordova Android project. Any interactions with the emulator require you to have an AVD defined.

    ./cordova/clean ........................ cleans the project
    ./cordova/build ........................ calls `clean` then compiles the project
    ./cordova/log   ........................ streams device or emulator logs to STDOUT
    ./cordova/run   ........................ calls `build` then deploys to a connected Android device. If no Android device is detected, will launch an emulator and deploy to it.
    ./cordova/version ...................... returns the cordova-android version of the current project

## Using Android Studio

1. Create a project
2. Import it via "Non-Android Studio Project"

## Running the Native Tests

The `test/` directory in this project contains an Android test project that can
be used to run different kinds of native tests. Check out the
[README contained therein](test/README.md) for more details!

#PouchDB

PouchDB is an open-source JavaScript database inspired by [Apache CouchDB](http://couchdb.apache.org/) that is designed to run well within the browser.

PouchDB was created to help web developers build applications that work as well offline as they do online.

Using PouchDB
-------------

To get started using PouchDB, check out the [web site](https://pouchdb.com) and [API documentation](https://pouchdb.com/api.html).

Getting Help
------------

The PouchDB community is active [on Freenode IRC](https://www.irccloud.com/invite?channel=pouchdb&hostname=irc.freenode.net&port=6697&ssl=1), in [the Google Groups mailing list](https://groups.google.com/forum/#!forum/pouchdb), and [on StackOverflow](http://stackoverflow.com/questions/tagged/pouchdb). Or you can [tweet @pouchdb](http://twitter.com/pouchdb)!

If you think you've found a bug in PouchDB, please write a reproducible test case and file [a Github issue](https://github.com/pouchdb/pouchdb/issues). We recommend [bl.ocks.org](http://bl.ocks.org/) for code snippets, because some iframe-based services like JSFiddle and JSBin do not support IndexedDB in all browsers. You can start with [this template](https://gist.github.com/nolanlawson/816f138a51b86785d3e6).

Prerelease builds
----

If you like to live on the bleeding edge, you can build PouchDB from source using these steps:

    git clone https://github.com/pouchdb/pouchdb.git
    cd pouchdb
    npm install

After running these steps, the browser build can be found in `packages/node_modules/pouchdb/dist/pouchdb.js`.

Changelog
----

PouchDB follows [semantic versioning](http://semver.org/). To see a changelog with all PouchDB releases, check out the [Github releases page](https://github.com/pouchdb/pouchdb/releases).

For a concise list of breaking changes, there's the [wiki list of breaking changes](https://github.com/pouchdb/pouchdb/wiki/Breaking-changes).

Keep in mind that PouchDB is auto-migrating, so a database created in 1.0.0 will still work if you open it in 4.0.0+. Any release containing a migration is clearly marked in the release notes.

Contributing
------------

We're always looking for new contributors! If you'd like to try your hand at writing code, writing documentation, designing the website, writing a blog post, or answering [questions on StackOverflow](http://stackoverflow.com/search?tab=newest&q=pouchdb), then we'd love to have your input.

If you have a pull request that you'd like to submit, please read the [contributing guide](https://github.com/pouchdb/pouchdb/blob/master/CONTRIBUTING.md) for info on style, commit message format, and other (slightly!) nitpicky things like that. PouchDB is heavily tested, so you'll also want to check out the [testing guide](https://github.com/pouchdb/pouchdb/blob/master/TESTING.md).



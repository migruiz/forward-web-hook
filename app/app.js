'use strict';
var firebase = require("firebase/app");
require('firebase/database');
var config = {
  apiKey: "AIzaSyDQKHvs_wO9CCkH0MXZGkMkkWLsikX-4yI",
  authDomain: "dpews-15bf5.firebaseapp.com",
  databaseURL: "https://dpews-15bf5.firebaseio.com",
  projectId: "dpews-15bf5",
  storageBucket: "dpews-15bf5.appspot.com",
  messagingSenderId: "326962429407",
  appId: "1:326962429407:web:c9397174108d06ec"
};
firebase.initializeApp(config);




var starCountRef = firebase.database().ref('posts')
starCountRef.on('child_added', async function(snapshot) {
  console.log(snapshot.val())
   var updates = {};
  updates['/posts/' + snapshot.key] = null;
  await firebase.database().ref().update(updates);
  console.log("deleted")
});
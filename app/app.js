'use strict';
const axios = require('axios')
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


var listToMonitor = 
[
  {key:'muster',target:'https://dpews-15bf5.firebaseio.com/posts/sent.json'}
]

for (const index in listToMonitor) {
    const element = listToMonitor[index];
    var starCountRef = firebase.database().ref('posts/'+element.key)
    starCountRef.on('child_added', async function(snapshot) {
      console.log(snapshot.val())
      var updates = {};
      updates['/posts/'+ element.key + '/' + snapshot.key] = null;
      await axios.post(element.target,snapshot.val());
      await firebase.database().ref().update(updates);
      console.log("deleted")
    });
}






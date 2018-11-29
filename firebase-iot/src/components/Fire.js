import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyC14Ql3OZel0C69c7Fukc7oBkxBXHzKj3g",
    authDomain: "smart-conditioner.firebaseapp.com",
    databaseURL: "https://smart-conditioner.firebaseio.com",
    projectId: "smart-conditioner",
    storageBucket: "smart-conditioner.appspot.com",
    messagingSenderId: "896302941195"
  };
  firebase.initializeApp(config);
var Fire = firebase.initializeApp(config);
export default Fire;
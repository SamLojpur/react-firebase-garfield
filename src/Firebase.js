import * as firebase from 'firebase/app';
import 'firebase/database';

//import 'firebase/storage';

let config = {
    apiKey: "API_KEY",
    //please dont commit this
    authDomain: "searchforthebestgarfieldcomic.firebaseapp.com",
    databaseURL: "https://searchforthebestgarfieldcomic.firebaseio.com",
    projectId: "searchforthebestgarfieldcomic",
    storageBucket: "searchforthebestgarfieldcomic.appspot.com",
    messagingSenderId: "913124011844"
  };
firebase.initializeApp(config);

export default firebase;
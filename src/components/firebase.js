import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAjStVZY-brqAExj1MPNtxw6SfPJsjBJII",
    authDomain: "omnistore-ff6df.firebaseapp.com",
    databaseURL: "https://omnistore-ff6df.firebaseio.com",
    projectId: "omnistore-ff6df",
    storageBucket: "omnistore-ff6df.appspot.com",
    messagingSenderId: "496523278027",
    appId: "1:496523278027:web:617ab67bf5afe29e1ccd4e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage }
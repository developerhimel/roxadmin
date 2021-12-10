import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyB34pKyKlXm1ukGMLfsYz1XqUAkTg5HB2o",
  authDomain: "on-the-rox-app.firebaseapp.com",
  projectId: "on-the-rox-app",
  storageBucket: "on-the-rox-app.appspot.com",
  messagingSenderId: "668030157807",
  appId: "1:668030157807:web:5ad36f5853fd2bcd406c1a",
  measurementId: "${config.measurementId}",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const storage = firebase.storage();

export { storage, firebase as default };

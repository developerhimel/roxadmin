import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCM-kYT5WSG205M7xQ0ar0c9b3-T_rde_k",
  authDomain: "ontherox-63f4d.firebaseapp.com",
  projectId: "ontherox-63f4d",
  storageBucket: "ontherox-63f4d.appspot.com",
  messagingSenderId: "144696005559",
  appId: "1:144696005559:web:c7a7e0d87e52510cf90e32",
  measurementId: "G-L1JDLRMR56",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const storage = firebase.storage();

export { storage, firebase as default };

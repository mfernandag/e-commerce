import * as firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDyWKVvY1-E3mgpWK9tdd8xw7v2DrHTp8Y",
  authDomain: "e-commerce-8fe98.firebaseapp.com",
  databaseURL: "https://e-commerce-8fe98.firebaseio.com",
  projectId: "e-commerce-8fe98",
  storageBucket: "e-commerce-8fe98.appspot.com",
  messagingSenderId: "988149036121",
  appId: "1:988149036121:web:058bf7f2b8164fe59f6d48",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}

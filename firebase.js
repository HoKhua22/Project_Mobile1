// // Import the functions you need from the SDKs you need
// import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDCPwuRPpBkIX_O9GTaxZfKw972S1ylUr0',
  authDomain: 'story-mobile.firebaseapp.com',
  projectId: 'story-mobile',
  storageBucket: 'story-mobile.appspot.com',
  messagingSenderId: '1015880420931',
  appId: '1:1015880420931:web:3b2f5c5cea69171c318ef6',
};

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };

// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyDCPwuRPpBkIX_O9GTaxZfKw972S1ylUr0',
//   authDomain: 'story-mobile.firebaseapp.com',
//   projectId: 'story-mobile',
//   storageBucket: 'story-mobile.appspot.com',
//   messagingSenderId: '1015880420931',
//   appId: '1:1015880420931:web:3b2f5c5cea69171c318ef6',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

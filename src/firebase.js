import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBFPDRNxD3ErUugexBXsxqunGh_aZFt7zo",
  authDomain: "todo-app-522ad.firebaseapp.com",
  projectId: "todo-app-522ad",
  storageBucket: "todo-app-522ad.appspot.com",
  messagingSenderId: "384090076448",
  appId: "1:384090076448:web:2811231920aff9a8f69345",
  measurementId: "G-93CTRMC3QH"
});

const db = firebaseApp.firestore();
export default db ;
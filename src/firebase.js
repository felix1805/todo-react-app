import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFPDRNxD3ErUugexBXsxqunGh_aZFt7zo",
  authDomain: "todo-app-522ad.firebaseapp.com",
  projectId: "todo-app-522ad",
  storageBucket: "todo-app-522ad.appspot.com",
  messagingSenderId: "384090076448",
  appId: "1:384090076448:web:2811231920aff9a8f69345",
  measurementId: "G-93CTRMC3QH"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
const analytics = getAnalytics(db);

export default db ;
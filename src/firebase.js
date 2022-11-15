// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwre221wg5PrOX3Q84Z8j2YqtutB_8NRU",
  authDomain: "realtor-clone-react-3d96d.firebaseapp.com",
  projectId: "realtor-clone-react-3d96d",
  storageBucket: "realtor-clone-react-3d96d.appspot.com",
  messagingSenderId: "838832349332",
  appId: "1:838832349332:web:ca42f1079dbaebb28a9481"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
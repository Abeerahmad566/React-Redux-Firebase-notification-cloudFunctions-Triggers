import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB0jb15UeYh6QOZZlNLnCDKeqgi-UARac",
  authDomain: "firestore-multiverse.firebaseapp.com",
  projectId: "firestore-multiverse",
  storageBucket: "firestore-multiverse.appspot.com",
  messagingSenderId: "881246237000",
  appId: "1:881246237000:web:3dca85e1548067075f437d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

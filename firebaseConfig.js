import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBViHWiMuuzaz58aOMgN2TiWvHhxNGPw4c",
    authDomain: "nomnomify.firebaseapp.com",
    projectId: "nomnomify",
    storageBucket: "nomnomify.appspot.com",
    messagingSenderId: "303702116810",
    appId: "1:303702116810:web:850021bdf13f63f9a6a733",
    measurementId: "G-1NYHFHHRSE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBlMyto_O5OamhB8NkRypbiM6L0CoINf1o",
  authDomain: "capstone-bookyatra.firebaseapp.com",
  databaseURL: "https://capstone-bookyatra-default-rtdb.firebaseio.com/",
  projectId: "capstone-bookyatra",
  storageBucket: "capstone-bookyatra.appspot.com",
  messagingSenderId: "457288555571",
  appId: "1:457288555571:web:33b909052b92142b741746"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Realtime Database services
const auth = getAuth(app);
const database = getDatabase(app);

// Export the authentication and database services for use in other files
export { auth, database };

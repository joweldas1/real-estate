import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDKsi-3w_FbAq_dT63I9Y4K_6Sqml6Y3Ys",
  authDomain: "helper-a9.firebaseapp.com",
  projectId: "helper-a9",
  storageBucket: "helper-a9.appspot.com",
  messagingSenderId: "497443727872",
  appId: "1:497443727872:web:ac8ac53ce2e9328a9e06e5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth
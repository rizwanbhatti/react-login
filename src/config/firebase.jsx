
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore,doc, setDoc  } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAMyPnigA82hTdQB9FIzoXeDd37C1jamZ8",
  authDomain: "batch9-983b4.firebaseapp.com",
  databaseURL: "https://batch9-983b4-default-rtdb.firebaseio.com",
  projectId: "batch9-983b4",
  storageBucket: "batch9-983b4.appspot.com",
  messagingSenderId: "262976751573",
  appId: "1:262976751573:web:8500a3d14c772f36365f5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth,app,createUserWithEmailAndPassword,db,doc, setDoc,signInWithEmailAndPassword }

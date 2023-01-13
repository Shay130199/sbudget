import { initializeAuth } from "firebase/auth";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "solfinances-47bd8.firebaseapp.com",
  projectId: "solfinances-47bd8",
  storageBucket: "solfinances-47bd8.appspot.com",
  messagingSenderId: "223443273132",
  appId: "1:223443273132:web:6cec28be826be08d566609",
  measurementId: "G-PXTNZ57244"
};

const app = initializeAuth(firebaseConfig);
export const auth = getAuth()
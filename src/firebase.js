import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA65HsJP2JIaXyih07GyQJaI6QGNYGQlwk",
  authDomain: "crwn-clothing-31677.firebaseapp.com",
  projectId: "crwn-clothing-31677",
  storageBucket: "crwn-clothing-31677.appspot.com",
  messagingSenderId: "175063555125",
  appId: "1:175063555125:web:f1eff40444ac32b410257c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

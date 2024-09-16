
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCVa179Ie9eQLFv8bjhfRFKAzrADCkc-6M",
  authDomain: "miniblog-danilo-fa273.firebaseapp.com",
  projectId: "miniblog-danilo-fa273",
  storageBucket: "miniblog-danilo-fa273.appspot.com",
  messagingSenderId: "894007259230",
  appId: "1:894007259230:web:28f58cbb9b337faa11c4cf",
  measurementId: "G-TH6FJHKS91"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export{db};
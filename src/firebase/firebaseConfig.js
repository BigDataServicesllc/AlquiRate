
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCzT-DEMO-KEY-1234567890",
  authDomain: "alquirate-demo.firebaseapp.com",
  projectId: "alquirate-demo",
  storageBucket: "alquirate-demo.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:demo123456"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

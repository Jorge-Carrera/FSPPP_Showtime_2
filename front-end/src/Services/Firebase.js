// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { 
  apiKey: "AIzaSyAS8ErsOz9R6rkV90pjTMI9q81ScIsH4Ls",
  authDomain: "showtime-clone.firebaseapp.com",
  projectId: "showtime-clone",
  storageBucket: "showtime-clone.appspot.com",
  messagingSenderId: "927263343489",
  appId: "1:927263343489:web:2e81f8649b8f0cc7fe1e80",
  measurementId: "G-WXKZX742TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
auth.useDeviceLanguage();

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
   try {
      signInWithPopup(auth, googleProvider).then((res) => {
        const user = res.user
        console.log(user)
      })
   } catch (error) {
    console.log(error)
   }
}

export const signOut = async () => {
  try {
    await auth.signOut();
    alert('you have succesfully signed out')
  } catch (error) {
    console.log(error)
  }
}
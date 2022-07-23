// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCe_lmrI8zeEtvTqUgHB8cgwNiTBjUPctE',
  authDomain: 'react-fb-auth-34f69.firebaseapp.com',
  projectId: 'react-fb-auth-34f69',
  storageBucket: 'react-fb-auth-34f69.appspot.com',
  messagingSenderId: '757551676647',
  appId: '1:757551676647:web:15f485e345b3f7630b7642',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

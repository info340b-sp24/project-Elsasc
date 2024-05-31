import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'

// Cleaned but might need to remove more. 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZiB_2m81C4qZQzJ_4aA6XjvnDdB8dwgA",
  authDomain: "info340bb8.firebaseapp.com",
  databaseURL: "https://info340bb8-default-rtdb.firebaseio.com/",
  projectId: "info340bb8",
  storageBucket: "info340bb8.appspot.com",
  messagingSenderId: "696164339657",
  appId: "1:696164339657:web:b315bfb124af0754e16218"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

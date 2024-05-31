import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCZiB_2m81C4qZQzJ_4aA6XjvnDdB8dwgA",
    authDomain: "info340bb8.firebaseapp.com",
    databaseURL: "https://info340bb8-default-rtdb.firebaseio.com/",
    projectId: "info340bb8",
    storageBucket: "info340bb8.appspot.com",
    messagingSenderId: "696164339657",
    appId: "1:696164339657:web:b315bfb124af0754e16218"
};


const app = initializeApp(firebaseConfig)

export default app
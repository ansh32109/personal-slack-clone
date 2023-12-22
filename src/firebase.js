import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBVB_PZ4dW7PsFKB1oPMWdtwybW8ADOJ-g",
    authDomain: "slack-clone-b7c70.firebaseapp.com",
    projectId: "slack-clone-b7c70",
    storageBucket: "slack-clone-b7c70.appspot.com",
    messagingSenderId: "188076626108",
    appId: "1:188076626108:web:890308f2cc1867a81c40b9",
    measurementId: "G-BEW6WV447F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};
export default db;
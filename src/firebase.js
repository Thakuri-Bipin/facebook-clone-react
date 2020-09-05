import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCvsq4fB0PVGuPgZZOA1e_PjwtU9sSHOPA",
    authDomain: "facebook-clone-bd785.firebaseapp.com",
    databaseURL: "https://facebook-clone-bd785.firebaseio.com",
    projectId: "facebook-clone-bd785",
    storageBucket: "facebook-clone-bd785.appspot.com",
    messagingSenderId: "714178261505",
    appId: "1:714178261505:web:a78021d5372016d9970600",
    measurementId: "G-J38LC49XTR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
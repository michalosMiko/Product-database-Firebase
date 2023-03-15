import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDdG-QqMgTRAOOcfYimzllz6ETY5ycpZi4",
    authDomain: "movies-project2.firebaseapp.com",
    projectId: "movies-project2",
    storageBucket: "movies-project2.appspot.com",
    messagingSenderId: "134333837731",
    appId: "1:134333837731:web:a4b8353743d30bbf746a16"
  };

// počáteční initializace
firebase.initializeApp(firebaseConfig)

// počáteční inicializace služeb
const projectFirestore = firebase.firestore()

export { projectFirestore }
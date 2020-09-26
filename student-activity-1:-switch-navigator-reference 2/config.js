import firebase from 'firebase';





var firebaseConfig ={

  apiKey: "AIzaSyDtjYDvrCVUw3Rxa4pwptSTxxCLavhlgjU",
  authDomain: "something-f1136.firebaseapp.com",
  databaseURL: "https://something-f1136.firebaseio.com",
  projectId: "something-f1136",
  storageBucket: "something-f1136.appspot.com",
  messagingSenderId: "810655758998",
  appId: "1:810655758998:web:6bf1e32f2fe2867b2c60b7",
  measurementId: "G-0Q6DW1KCVW"
};


if(!firebase.apps.lenght)



{
  firebase.initializeApp(firebaseConfig)

}

export default firebase.database()
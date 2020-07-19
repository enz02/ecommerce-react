import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDrI8OjGlOjbkYd5d-nEIaEQhC2_1g3PZ0",
    authDomain: "ecommerce-db-d26bc.firebaseapp.com",
    databaseURL: "https://ecommerce-db-d26bc.firebaseio.com",
    projectId: "ecommerce-db-d26bc",
    storageBucket: "ecommerce-db-d26bc.appspot.com",
    messagingSenderId: "195064753405",
    appId: "1:195064753405:web:c5c24585aea4ede2526294"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if( !userAuth ) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();


    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    }catch(error){
      console.log(error.message);
    }
  }

  return userRef;


};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
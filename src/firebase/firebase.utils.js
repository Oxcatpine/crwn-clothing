import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDuP_7IwA54Y7VtN-iOHMt0xZQRd0wJhww",
    authDomain: "crwn-clothing-94384.firebaseapp.com",
    projectId: "crwn-clothing-94384",
    storageBucket: "crwn-clothing-94384.appspot.com",
    messagingSenderId: "533914780054",
    appId: "1:533914780054:web:69ac7ffeca5277b5b35db7",
    measurementId: "G-KT1PPRBLBY"
};

firebase.initializeApp(firebaseConfig); 

// export const CreateUserProfile = async (userAuth, additionalData) => {
//   if (!userAuth)return;
//   const userRef = firestore.doc (`users/${userAuth.uid}`)
//   const snapShot = await userRef.get();
//   if (!snapShot.exists){ 
//      const {dispalyName, email} = userAuth
//       const createdAt = new Date();
//     try {
     
//      await userRef.set ({
//        dispalyName,
//        email,
//        createdAt, 
//        ...additionalData
//      })
//      }catch (error){
//       console.log(error.message + 'error when creating users')
//     }
//   }
//   return userRef;
// }
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};



export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
  

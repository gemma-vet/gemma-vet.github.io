import firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: 'gemma-f1dc7.appspot.com',
  messagingSenderId: '1034583642308',
  appId: '1:1034583642308:web:505c8bc217f82a91c17991',
  measurementId: 'G-JFXER1MP6Z',
};

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

export default initFirebase;

import firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCkO6a3H-c568rAjHgz8BPaQDo8DblR5T8',
  authDomain: 'gemma-f1dc7.firebaseapp.com',
  projectId: 'gemma-f1dc7',
  storageBucket: 'gemma-f1dc7.appspot.com',
  messagingSenderId: '1034583642308',
  appId: '1:1034583642308:web:505c8bc217f82a91c17991',
  measurementId: 'G-JFXER1MP6Z',
};

firebase.initializeApp(firebaseConfig);

export const firebaseAnalytics = firebase.analytics();

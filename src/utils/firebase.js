import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDPLK3WKlr-pdIO1nGPdM1mKmpbaeHrUAs',
  authDomain: 'twittr-adb7d.firebaseapp.com',
  databaseURL: 'https://twittr-adb7d.firebaseio.com',
  projectId: 'twittr-adb7d',
  storageBucket: 'twittr-adb7d.appspot.com',
  messagingSenderId: '890875670149',
  appId: '1:890875670149:web:31411e7036ee6fa0e243ec',
};

firebase.initializeApp(firebaseConfig);

export default firebase;

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAVTQ5cpXoA0LfClyNfzcnvZFUVH1nM8KI",
    authDomain: "fir-978a7.firebaseapp.com",
    projectId: "fir-978a7",
    storageBucket: "fir-978a7.appspot.com",
    messagingSenderId: "50570915161",
    appId: "1:50570915161:web:01497772dafcb722837048",
    measurementId: "G-GNRM1T1WGE"
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export {firebase}
  
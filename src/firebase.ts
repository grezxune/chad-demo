import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBtnAfbBWejYVWwNL4ZWPA1vKxvB432_tQ',
  authDomain: 'chad-demo.firebaseapp.com',
  databaseURL: 'https://chad-demo.firebaseio.com',
  projectId: 'chad-demo',
  storageBucket: 'chad-demo.appspot.com',
  messagingSenderId: '868154824026',
  appId: '1:868154824026:web:e61ba583d3f337fa470f63',
  measurementId: 'G-7SW8M5L50T',
}
const app = firebase.initializeApp(firebaseConfig)

export const analytics = app.analytics()
export const db = app.database()

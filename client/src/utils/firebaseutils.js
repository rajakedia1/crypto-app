import firebase from 'firebase/app'
import 'firebase/database'
import { firebaseConfig } from './firebaseconfig'


const appConfig = firebase.initializeApp(firebaseConfig)
const firebaseRef = appConfig.database().ref()
const firebaseDatabase = firebaseRef.child('aphrodite-232fs')

export { firebaseRef, firebaseDatabase }
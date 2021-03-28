import firebase from 'firebase-admin'

var serviceAccount = require('./firebase-service-account-key.json')

/**
 * Initialize Firebase (if not yet initialized), and return its instance.
 * @returns firebase instance
 */
function getFirebase() {
  if (!firebase.apps.length) firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://bersuara-space-default-rtdb.firebaseio.com",
  })
  return firebase
}

/**
 * Get a Firebase Cloud Firestore instance.
 * @returns firestore instance
 */
function getFirestore() {
  return getFirebase().firestore()
}

export { getFirebase, getFirestore }
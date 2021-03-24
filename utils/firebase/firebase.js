import firebase from 'firebase'
import 'firebase/firestore'

import authConfig from './authConfig'

/**
 * Initialize Firebase (if not yet initialized), and return its instance.
 * @returns firebase instance
 */
function getFirebase() {
  if (!firebase.apps.length) firebase.initializeApp(authConfig)
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
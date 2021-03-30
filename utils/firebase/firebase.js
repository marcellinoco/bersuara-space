import firebase from 'firebase-admin'

/**
 * Initialize Firebase (if not yet initialized), and return its instance.
 * @returns firebase instance
 */
function getFirebase() {
  if (!firebase.apps.length) firebase.initializeApp({
    credential: firebase.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    }),
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
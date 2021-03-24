import { getFirestore } from '@utils/firebase/firebase'

/**
 * Get list of useful contacts from Firebase Cloud Firestore.
 * @returns list of useful contact objects
 */
export async function getContacts() {
  const db = getFirestore()
  const contactsRef = db.collection("contacts")
  const snapshot = await contactsRef.get();

  let contacts = []

  if (snapshot.empty) console.log("/api/contacts/getContacts: No documents available.")
  else snapshot.forEach(doc => contacts.push(doc.data()))

  return contacts
}

/**
 * Get list of useful contacts from Firebase Cloud Firestore.
 * Accessed from /api/contacts/getContacts.
 * @param {*} req 
 * @param {*} res 
 */
export default async function handler(req, res) {
  const contacts = await getContacts()

  res.statusCode = 200
  res.json(contacts)
}
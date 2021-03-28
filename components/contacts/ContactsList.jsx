import React, { useState, useEffect } from 'react'

import ContactsRegion from './ContactsRegion'

export default function ContactsList({ className }) {
  const [contacts, setContacts] = useState([])
  const [regions, setRegions] = useState([])

  const fetchContacts = async () => {
    await fetch("/api/contacts/getContacts").then(async (response) => {
      if (response.ok) {
        let contactsJson = await response.json()

        setContacts(contactsJson)
        extractRegions(contactsJson)
      }
    })
  }

  const extractRegions = (contacts) => {
    let tempRegions = []
    contacts.forEach((contact) => {
      if (!tempRegions.includes(contact.region)) 
        tempRegions.push(contact.region)
    })

    tempRegions.sort()  // Sort by alphabetical order.
    setRegions(tempRegions)
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  return (
    <div className={`${className} flex flex-col`}>
      { regions.map((region) => (
        <ContactsRegion 
          key={region} 
          regionName={region} 
          contactsList={contacts.filter((contact) => contact.region == region)}
          className="mt-10"
        />
      )) }
    </div>
  )
}
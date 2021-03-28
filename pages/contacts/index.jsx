import React, { useState, useEffect } from 'react'

import Head from 'next/head'
import Image from 'next/image'

export default function Contacts() {
  const [contacts, setContacts] = useState([])

  const fetchContacts = async () => {
    let contactsResponse = await fetch("/api/contacts/getContacts")
    if (contactsResponse.ok) {
      let contactsJson = await contactsResponse.json()
      setContacts(contactsJson)
    }
  }

  useEffect(() => fetchContacts(), [])

  return (<>
    <Head>
      <title>Contacts</title>
    </Head>

    <div className="relative min-h-screen bg-white-dark">
      <div className="container flex flex-col mx-auto pt-20">
        <div className="flex flex-col">
          <h1 className="self-center text-56 font-bold text-gray-dark">
            Here's some helpful <span className="text-purple">contacts</span>.
          </h1>

          <div className="relative w-auto h-auto">
            <Image
              src="/assets/contacts/contacts-1.svg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  </>)
}
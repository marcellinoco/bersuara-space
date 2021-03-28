import React, { useState, useEffect } from 'react'

import Head from 'next/head'

export default function Home() {
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
      <title>bersuara.space</title>
    </Head>

    <div className="relative min-h-screen bg-white-dark">
      <div className="container flex flex-col mx-auto pt-20 pb-10">
        <div className="flex flex-row px-20">
          <div className="flex flex-col w-3/5">
            <h1 className="text-56 font-bold text-gray-dark leading-tight select-none">
              Let's break the chain.
            </h1>

            <h1 className="text-56 font-bold text-purple leading-tight select-none">
              Together.
            </h1>

            <p className="mt-6 text-xl font-normal text-gray select-none">
              We are dedicated to ending the chain of sexual <br/> harassment in Indonesia and to support victims in need.  
            </p>

            <div className="flex flex-row mt-24">
              <button className="w-60 h-14 text-lg font-semibold text-white bg-purple rounded-xl focus:outline-none">
                Get Help
              </button>

              <button className="w-60 h-14 ml-8 text-lg font-semibold text-gray rounded-xl border-2 border-gray-light focus:outline-none">
                Learn More
              </button>
            </div>
          </div>

          <img 
            src="/assets/landing/landing-1.svg"
            className="-my-4 w-2/5 h-auto"
          />
        </div>

        <img
          src="/icons/landing/chevron-down.svg"
          className="w-16 h-12 mt-12 self-center" />
      </div>
    </div>
  </>)
}
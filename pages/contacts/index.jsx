import React, { useState, useEffect } from 'react'

import Head from 'next/head'
import ContactsList from '@components/contacts/ContactsList'

export default function Contacts() {

  return (<>
    <Head>
      <title>Contacts</title>
    </Head>

    <div className="relative min-h-screen bg-white-dark">
      <div className="container flex flex-col mx-auto pt-20 pb-10">
        <div className="flex flex-col px-20 ">
          <h1 className="self-center text-56 font-bold text-gray-dark">
            Here's some helpful <span className="text-purple">contacts</span>.
          </h1>

          <img 
            src="/assets/contacts/contacts-1.svg"
            className="self-center mt-10 w-1/2 h-auto"
          />

          <ContactsList className="self-center mt-10" />
        </div>
      </div>
    </div>
  </>)
}
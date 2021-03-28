import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between px-8">
      {/* Navigation links */}
      <div className="flex flex-row self-center place-items-center my-2 text-sm font-normal select-none">
        {/* bersuara.space logo */}
        <Link href="/">
          <a className="text-lg font-medium">
            <span className="text-purple">bersuara</span>.space
          </a>
        </Link>

        <Link href="/">
          <a className="ml-16">Support</a>
        </Link>

        <Link href="/">
          <a className="ml-16">Forums</a>
        </Link>

        <Link href="/">
          <a className="ml-16">News</a>
        </Link>

        <Link href="/contacts">
          <a className="ml-16">Contacts</a>
        </Link>
      </div>

      <div className="flex flex-row self-stretch place-items-center text-sm font-medium">
        <Link href="/">
          <a className="mr-10">sign in</a>
        </Link>

        <div className="flex self-stretch bg-purple">
          <Link href="/">
            <a className="self-center mx-6 text-white">sign up</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
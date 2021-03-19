import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="flex flex-row py-2 px-8">
      {/* bersuara.space logo */}
      <Link href="/">
        <a className="text-lg font-medium">
          <span className="text-purple">bersuara</span>.space
        </a>
      </Link>

      {/* Navigation links */}
      <div className="flex flex-row self-center text-sm font-normal select-none">
        <Link href="">
          <a className="ml-16">Support</a>
        </Link>

        <Link href="">
          <a className="ml-16">Forums</a>
        </Link>

        <Link href="">
          <a className="ml-16">News</a>
        </Link>

        <Link href="">
          <a className="ml-16">Contacts</a>
        </Link>
      </div>
    </div>
  )
}
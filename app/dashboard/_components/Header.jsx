import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
  return (
    <div className="p-5 shadow-md flex justify-end items-center">
      <UserButton />
    </div>
  )
}

export default Header

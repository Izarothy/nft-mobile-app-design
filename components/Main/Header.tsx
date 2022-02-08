import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex h-[40%] flex-col items-center">
      <span>
        <Image
          src={'/images/Banner.png'}
          width={428}
          height={228}
          quality="100"
        />
      </span>
      <span className="relative bottom-[55%] block h-24 w-24 rounded-full border-2 border-gray-700">
        <Image src={'/images/user-avatar.png'} width={138} height={138} />
      </span>
    </header>
  )
}

export default Header

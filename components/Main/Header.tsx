import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex h-[40%] flex-col items-center">
      <span className="relative w-full">
        <Image
          src={'/images/Banner.png'}
          width={428}
          height={228}
          quality="100"
          layout="responsive"
        />
      </span>
    </header>
  )
}

export default Header

import React from 'react'
import Image from 'next/image'

interface Props {
  setUserNew: (userNew: boolean) => void
}
const Welcome = ({ setUserNew }: Props) => {
  return (
    <main className="h-screen overflow-x-hidden bg-primary-dark pt-8">
      <div className="relative h-full md:hidden">
        <h1 className="mx-4 text-[180%] font-bold text-white">
          Discover, collect and sell extraordinary NFTs
        </h1>
        <span className="absolute top-36 -right-4 z-10 mb-8 w-4/5">
          <Image
            src="/images/welcome-1.png"
            width={387}
            height={628}
            objectFit="cover"
            quality="100"
          />
        </span>
        <span className="absolute bottom-0 w-4/5 ">
          <Image
            src="/images/welcome-2.png"
            width={370}
            height={280}
            objectFit="cover"
            quality="100"
          />
        </span>
        <div className="flex w-full justify-center">
          <button
            className="px-auto fixed bottom-2 z-20 mx-auto w-5/6 rounded-lg bg-primary-violet py-3 text-sm"
            onClick={() => setUserNew(false)}
          >
            Let's Get Started
          </button>
        </div>
        <div className="hidden h-screen md:block">
          This layout is only available for mobile
        </div>
      </div>
    </main>
  )
}

export default Welcome

import Image from 'next/image'
import React from 'react'

type Props = {
  name: string
  image: string
  price: number
}

const NFTCard = ({ name, image, price }: Props) => {
  return (
    <div className="mb-2 rounded-lg border border-white/10 bg-white/5 p-4">
      <div className="w-full max-w-xl">
        <Image
          src={image}
          alt={name}
          width={150}
          height={180}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <h3 className="mt-4">{name}</h3>
      <div className="mt-3 flex justify-between">
        <span className="flex gap-2">
          {price}
          <span className="text-sm text-gray-400">ETH</span>
        </span>
        <span className="flex gap-1">
          92
          {/* Heart SVG  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1 h-4 w-4"
            fill="purple"
            viewBox="0 0 24 24"
            stroke="purple"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </span>
      </div>
    </div>
  )
}

export default NFTCard

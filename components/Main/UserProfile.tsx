import Image from 'next/image'
import React from 'react'

const UserProfile = () => {
  return (
    <div className="grid place-items-center text-center">
      <span className="relative block h-24 w-24 rounded-full border-2 border-gray-700">
        <Image src={'/images/user-avatar.png'} width={138} height={138} />
      </span>
      <h1 className="text-2xl font-medium">Benjamin Ray</h1>
      <div className="mt-2 flex justify-center gap-2">
        <span>4.5</span>
        {/* Star SVG  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="white"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
        <span>|</span>
        <span>92</span>
        {/* Heart SVG  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
      </div>
    </div>
  )
}

export default UserProfile

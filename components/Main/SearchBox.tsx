import React from 'react'

const SearchBox = () => {
  return (
    <div className="mt-2 flex items-center justify-between text-gray-500">
      <div className="grow">
        {/* Search SVG  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute ml-2 mt-2 h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-lg border border-white/10 bg-white/5 py-2 pl-10 pr-1"
        />
      </div>
      <div className="">
        {/* Filters SVG  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 min-w-[50px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </div>
    </div>
  )
}

export default SearchBox

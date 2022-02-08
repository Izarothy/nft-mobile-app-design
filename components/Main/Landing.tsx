import React from 'react'
import Header from './Header'
import NFTGrid from './NFTGrid'
import SearchBox from './SearchBox'
import UserProfile from './UserProfile'

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-primary-dark font-poppins">
      <Header />
      <UserProfile />
      <main className="p-2">
        <SearchBox />
        <NFTGrid />
      </main>
    </main>
  )
}

export default Home

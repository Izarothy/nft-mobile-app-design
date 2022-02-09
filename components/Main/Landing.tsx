import React from 'react'
import Header from './Header'
import NFTGrid from './NFTGrid'
import SearchBox from './SearchBox'
import UserProfile from './UserProfile'

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-primary-dark font-poppins">
      <div className="md:hidden">
        <Header />
        <UserProfile />
        <div className="p-2">
          <SearchBox />
          <NFTGrid />
        </div>
      </div>
      <div className="hidden h-screen place-items-center md:grid">
        This layout is only available for mobile
      </div>
    </main>
  )
}

export default Home

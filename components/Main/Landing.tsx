import React from 'react'
import Header from './Header'
import SearchBox from './SearchBox'
import UserProfile from './UserProfile'

const Home = () => {
  return (
    <main className="flex h-screen flex-col bg-primary-dark font-poppins">
      <Header />
      <UserProfile />
      <main className="p-2">
        <SearchBox />
      </main>
    </main>
  )
}

export default Home

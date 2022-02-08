import React from 'react'
import Header from './Header'
import UserProfile from './UserProfile'

const Home = () => {
  return (
    <main className="flex h-screen flex-col bg-primary-dark font-poppins">
      <Header />
      <UserProfile />
    </main>
  )
}

export default Home

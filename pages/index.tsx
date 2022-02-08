import Welcome from '../components/Welcome'
import Landing from '../components/Main/Landing'
import { useState, useEffect } from 'react'
export default function Home() {
  const [userNew, setUserNew] = useState<boolean>(true)
  useEffect(() => {
    localStorage.userNew
      ? setUserNew(false)
      : localStorage.setItem('userNew', 'true')
  }, [])
  return userNew ? <Welcome setUserNew={setUserNew} /> : <Landing />
}

import Welcome from '../components/Welcome'
import { useState, useEffect } from 'react'
export default function Home() {
  const [userNew, setUserNew] = useState<boolean>(true)

  useEffect(() => {
    if (!localStorage.userNew) {
      localStorage.setItem('userNew', 'false')
    } else {
      setUserNew(false)
    }
  }, [])
  return userNew ? <Welcome /> : <div>xd</div>
}

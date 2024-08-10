import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [profile, setProfile] = useState(false)

  return (
    <UserContextProvider>
      
      {profile ? <Profile /> : <Login setProfile={setProfile} />}
    </UserContextProvider>
  )
}

export default App

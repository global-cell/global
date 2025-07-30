import React, { useState } from 'react'
import { LoginForm } from './components/LoginForm'
import { VotingInterface } from './components/VotingInterface'

interface Voter {
  id: string
  name: string
  address: string
}

function App() {
  const [voter, setVoter] = useState<Voter | null>(null)

  const handleLogin = (voterData: Voter) => {
    setVoter(voterData)
  }

  const handleLogout = () => {
    setVoter(null)
  }

  return (
    <div className="App">
      {voter ? (
        <VotingInterface voter={voter} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App
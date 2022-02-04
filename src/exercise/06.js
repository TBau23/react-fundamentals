// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useRef, useState } from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).

  const [input, setInput] = useState('')
  const [error, setError] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmitUsername(input)
  }

  const handleChange = (e) => {
    setInput(e.target.value.toLowerCase())
    // const isValid = e.target.value === e.target.value.toLowerCase();
    // setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label>Username:</label>
        <input onChange={handleChange} name='username' type="text" value={input}/>
      </div>
      {/* <h2 style={{color: 'red'}}>{error} </h2> */}
      <button type="submit" >Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

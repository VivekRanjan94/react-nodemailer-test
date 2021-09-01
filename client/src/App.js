import React, { useState } from 'react'
import Axios from 'axios'

require('dotenv').config()

function App() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    console.log('hi')
    const response = await Axios.post(
      `${process.env.REACT_APP_SERVER_URL}/send-mail`,
      {
        body: { email, subject, body },
      }
    )

    // const data = await response.json()
    console.log(response)
  }

  return (
    <div className='App'>
      <form>
        <label htmlFor='email'>Email: </label>
        <input
          type='text'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='subject'>Subject: </label>
        <input
          type='text'
          name='subject'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <label htmlFor='body'>Body: </label>
        <input
          type='text'
          name='body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button onClick={submit}>Send</button>
      </form>
    </div>
  )
}

export default App

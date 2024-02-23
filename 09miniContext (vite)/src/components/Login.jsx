import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const {setuser} = useContext(UserContext)

  const onSubmithandle = (e) =>{
    e.preventDefault(e)
    setuser({username, password})
  }

  return (
    <div>
      <input 
      type="text" 
      onChange={(e) => setusername(e.target.value)}
      value={username}
      placeholder='username'
      />
      {' '}
      <input 
      type="password" 
      value={password}
      onChange={(e) => setpassword(e.target.value)}
      placeholder='password'
      />
      {' '}
      <button onClick={onSubmithandle}>
        submit
      </button>
    </div>
  )
}

export default Login
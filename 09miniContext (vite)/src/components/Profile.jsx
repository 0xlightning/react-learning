import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Product() {
  const {user} = useContext(UserContext)

  if(!user) return <h1>Not listed in</h1>
  return (
    <div>
      welcome {user.username}
    </div>
  )
}

export default Product
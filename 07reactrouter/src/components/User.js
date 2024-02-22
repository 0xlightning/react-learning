import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
  const {userid} = useParams()

  return (
    <div className='bg-orange-400 text-center 
    p-5 text-2xl text-white'>
      User {userid}
    </div>
  )
}

export default User
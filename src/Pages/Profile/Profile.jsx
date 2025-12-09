import React, { useContext } from 'react'
import { Auth_Data_Context } from '../../Components/ContextApi/AuthContext'

export default function Profile() {
  const {name}=useContext(Auth_Data_Context)
  return (
    <div>Profile {name}</div>
  )
}

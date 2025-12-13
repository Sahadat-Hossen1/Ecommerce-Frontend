import React, { useContext } from 'react'
import { Auth_Data_Context } from '../../Components/ContextApi/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const {user}=useContext(Auth_Data_Context)
 
  
  return (
    <div>Profile {user}</div>
  )
}

import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../slices/authSlice'
import { useNavigate } from 'react-router-dom'
import ProtectedLayout from '../layouts/ProtectedLayout'

const Admin = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleLogout = () =>{
    dispatch(logout())
    navigate('/login')
  }

  return (
		<ProtectedLayout>
			<h1>admin</h1>
      <button onClick={handleLogout}>logout</button>
		</ProtectedLayout>
	)
}

export default Admin

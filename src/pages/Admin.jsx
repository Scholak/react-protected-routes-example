import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../slices/authSlice'
import { useNavigate } from 'react-router-dom'

const Admin = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleLogout = () =>{
    dispatch(logout())
    navigate('/login')
  }

  return (
		<>
			<h1>admin</h1>
      <button onClick={handleLogout}>logout</button>
		</>
	)
}

export default Admin

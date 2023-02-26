import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../slices/authSlice'
import PublicLayout from '../layouts/PublicLayout'

const Login = () => {

  const { auth } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleLogin = () => {
    dispatch(login())
    navigate('/admin')
  }

  return (
		<>
			<button onClick={handleLogin}>login</button>
		</>
	)
}

export default Login

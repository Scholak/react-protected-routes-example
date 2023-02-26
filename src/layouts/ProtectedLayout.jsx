import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Nav from './Nav'

const animations = {
	initial: { opacity: 0, x: 100 },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: -100 },
}

const ProtectedLayout = () => {
  
  const { auth } = useSelector(state => state.auth)

	if (!auth) {
		return <Navigate to='/login' />
	}

  return (
		<motion.div
			variants={animations}
			initial='initial'
			animate='animate'
			exit='exit'
			transition={{ duration: .5 }}
		>
			<Nav />
			<Outlet />
		</motion.div>
	)
}

export default ProtectedLayout

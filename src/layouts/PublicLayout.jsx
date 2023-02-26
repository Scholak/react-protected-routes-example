import React from 'react'
import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const animations = {
	initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 }
}

const PublicLayout = () => {
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

export default PublicLayout

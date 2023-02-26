import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
		<nav>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/admin'>Admin</NavLink>
				</li>
				<li>
					<NavLink to='/posts/edit/1'>Edit Post 1</NavLink>
				</li>
				<li>
					<NavLink to='/login'>Login</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Nav

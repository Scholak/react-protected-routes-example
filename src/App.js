import React from 'react';
import {  Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import ProtectedLayout from './layouts/ProtectedLayout';
import PublicLayout from './layouts/PublicLayout';


const Home = React.lazy(() => import('./pages/Home'))
const Admin = React.lazy(() => import('./pages/Admin'))
const Login = React.lazy(() => import('./pages/Login'))
const EditPost = React.lazy(() => import('./pages/EditPost'))

function App() {

  const location = useLocation()

  return (
		<React.Suspense fallback='loading...'>
			<AnimatePresence mode='wait'>
				<Routes key={location.pathname} location={location}>
					<Route path='/' element={<PublicLayout />}>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
					</Route>
					<Route path='/' element={<ProtectedLayout />}>
						<Route path='/admin' element={<Admin />} />
						<Route path='/posts/edit/:id' element={<EditPost />} />
					</Route>
				</Routes>
			</AnimatePresence>
		</React.Suspense>
	)
}

export default App;

import React from 'react';
import {  Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';


const Home = React.lazy(() => import('./pages/Home'))
const Admin = React.lazy(() => import('./pages/Admin'))
const Login = React.lazy(() => import('./pages/Login'))

function App() {

  const location = useLocation()

  return (
		<React.Suspense fallback='loading...'>
			<AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/login' element={<Login />} />
        </Routes>
			</AnimatePresence>
		</React.Suspense>
	)
}

export default App;

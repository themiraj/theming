import SignupPage from 'src/app/Pages/SignupPage/index'
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from 'src/app/Pages/LandingPage'
import LoginPage from 'src/app/Pages/LoginPage/index'
import { useState } from 'react'
const PublicRoutes = () => {
  const [loadingPage,_loadingPage] = useState(true)
  useEffect(()=> {
    _loadingPage(false)
  },[])
  return (
    <>
      <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/sign-up' element={<SignupPage />} />
      </Routes>
    </>
  )
}

export default PublicRoutes
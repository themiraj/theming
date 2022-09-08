import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../app/Pages/LandingPage'

const PublicRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPage />} />
    </Routes>
  )
}

export default PublicRoutes
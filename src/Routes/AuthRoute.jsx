import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from 'src/app/Layouts/Layout'
import { lazy } from 'react';
import { Suspense } from 'react';
import { Backdrop, CircularProgress, LinearProgress } from '@mui/material';
import { AuthPaths } from './RouterPath';
//Component 
const LoginPage = lazy(() => import('src/app/Pages/LoginPage/index'));
const LandingPage = lazy(() => import('src/app/Pages/LandingPage'));
const SignupPage = lazy(() => import('src/app/Pages/SignupPage/index'));
const NotFoundPage = lazy(() => import('src/app/Pages/NotFoundPage/Index'));
const AuthRoute = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        }>
          <Routes>
            <Route path={AuthPaths.home} element={<LandingPage />} />
            <Route path={AuthPaths.login} element={<LoginPage />} />
            <Route path={AuthPaths.signup} element={<SignupPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  )
}

export default AuthRoute
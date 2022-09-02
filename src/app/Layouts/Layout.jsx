import { Container } from '@mui/material'
import React from 'react'
import { LayoutWrapper } from '../Layouts/style/layoutStyled'
const Layout = ({children}) => {
  return (
    <LayoutWrapper sx={{
      backgroundColor: 'primary.main',
      p:2
    }}>
      <Container maxWidth="sm">
        {children}
      </Container>
    </LayoutWrapper>
  )
}

export default Layout
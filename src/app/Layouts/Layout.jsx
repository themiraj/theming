import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { LayoutWrapper } from '../Layouts/style/layoutStyled'
import PublicHeader from '../Shared/Components/GloabalComponent/PublicHeader'
const Layout = (props) => {
  return (
    <LayoutWrapper>
      <PublicHeader />
      {props.Con ? <props.Con /> : null}
      
      <Container maxWidth="xl">
        <Box
          sx={{
            paddingLeft:3,
            paddingRight:3,
          }}>
          {props.children}
        </Box>
      </Container>
    </LayoutWrapper>
  )
}

export default Layout
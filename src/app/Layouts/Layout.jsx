import { Box } from '@mui/system'
import React from 'react'
import { LayoutWrapper } from '../Layouts/style/layoutStyled'
import PublicHeader from '../Shared/Components/GloabalComponent/PublicHeader'
const Layout = (props) => {
  return (
    <LayoutWrapper>
      <PublicHeader />
      {props.Con ? <props.Con /> : null}
        <Box
          sx={{
            paddingLeft:0,
            paddingRight:0,
          }}>
          {props.children}
        </Box>
    </LayoutWrapper>
  )
}

export default Layout
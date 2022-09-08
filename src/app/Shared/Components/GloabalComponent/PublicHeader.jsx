import React from 'react'
import AppBar from '@mui/material/AppBar'
import { Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const PublicHeader = () => {
  return (
    <AppBar position="static">
        <Container maxWidth="xl" sx={{padding:0}}>
            <Toolbar 
                sx={{
                }}
            >
                <Box 
                    sx={{
                        display: 'flex' ,
                        justifyContent:'space-between',
                        width:"100%" 
                    }}
                >
                    <Box sx={{
                        alignSelf:'center'
                    }}>
                        <Typography>
                            Luminoguru
                        </Typography>
                    </Box>
                    <Box>
                        <Button component={Link} to={'/login'} variant="custom.white">Login</Button>
                    </Box>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}
export default PublicHeader
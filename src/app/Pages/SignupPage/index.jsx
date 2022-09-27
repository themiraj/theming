import { Box, Divider } from '@mui/material'
import { margin } from '@mui/system'
import { CustomeInput } from 'src/StyledComponents/GlobalStyledComponent'
import Layout from '../../Layouts/Layout'
import { Button } from '@mui/material';
import {ReactComponent as GoogleIcon} from 'src/assets/svg/googleSvg.svg'
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';
const SignupPage = () => {
	return (
		<Layout>
			<Pulse>
			<Box 
				sx={{
					maxWidth: '450px',
					margin: '0 auto',
					border: '1px solid #ccc',
					padding: 2,
					borderRadius: 2,
					boxShadow:5,
					marginTop:20,
					backgroundColor:'rgb(255,255,255,0.85)'
				}}
			>
				<Box>
					<CustomeInput sx={{ mb: 2, mt: 0 }} type="text" label="Name*" variant="standard" />
					<CustomeInput sx={{ mb: 2, mt: 0 }} type="email" label="Email*" variant="standard" />
					<CustomeInput sx={{ mb: 4, mt: 0 }} type="password" label="Password*" variant="standard" />
				</Box>
				<Box sx={{
					marginBottom: 3,
					display:'flex',
					justifyContent:'space-between'
				}}>
					<Button component={Link} to={'/login'}>Login Here</Button>
					<Button color={'primary'} variant="contained">Register</Button>
				</Box>
				<Divider />
				<Box>
					<Button 
						sx={{
							width:'100%',
							marginTop:2
						}}
					variant="outlined">Signup with <GoogleIcon style={{
						maxWidth:'25px',
						marginLeft:'15px',
						
					}}/></Button>
				</Box>
			</Box>
			</Pulse>
		</Layout>
	)
}

export default SignupPage
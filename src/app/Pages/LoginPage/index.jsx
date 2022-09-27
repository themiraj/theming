import { Box, Divider } from '@mui/material'
import { CustomeInput } from 'src/StyledComponents/GlobalStyledComponent'
import Layout from '../../Layouts/Layout'
import { Button } from '@mui/material';
import {ReactComponent as GoogleIcon} from 'src/assets/svg/googleSvg.svg'
import { Link } from 'react-router-dom';
import { CSSTransition, ReactCSSTransitionGroup } from 'react-transition-group'
import { Fade, Reveal, Zoom } from 'react-reveal';
const LoginPage = () => {
	return (
		<Layout>
			<Fade>
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
						<CustomeInput sx={{ mb: 2, mt: 0 }} type="email" label="Email*" variant="standard" />
						<CustomeInput sx={{ mb: 4, mt: 0 }} type="password" label="Password*" variant="standard" />
					</Box>
					<Box sx={{
						marginBottom: 3,
						display:'flex',
						justifyContent:'space-between'
					}}>
						<Button component={Link} to={'/sign-up'}>Create an account</Button>
						<Button color={'primary'} variant="contained">Login</Button>
					</Box>
					<Divider />
					<Box>
						<Button 
							sx={{
								width:'100%',
								marginTop:2
							}}
						variant="outlined">Sign with <GoogleIcon style={{
							maxWidth:'25px',
							marginLeft:'15px',
							
						}}/></Button>
					</Box>
				</Box>
			</Fade>
		</Layout>
	)
}

export default LoginPage
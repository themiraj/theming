import { Backdrop, Box, CircularProgress, Divider } from '@mui/material'
import { CustomeInput } from 'src/StyledComponents/GlobalStyledComponent'
import { Button } from '@mui/material';
import {ReactComponent as GoogleIcon} from 'src/assets/svg/googleSvg.svg'
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { database } from 'src/firebase';
import { ref, set } from 'firebase/database';
import * as yup from 'yup';
import { useFormik } from 'formik';
const SignupPage = () => {	
	const [overlayDrop, setOverlayDrop] = useState(false)
	const auth = getAuth()
	const registerHandler = async (email, password, name, phone, address) => {
		setOverlayDrop(true)
		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			setOverlayDrop(false)
			// Signed in 
			const user = userCredential.user;
			// ...
			return userCredential
		})
		.then((res)=> {
			set(ref(database,'users'),{
				[res.user.uid] : {
					name:name,
					email: res.user.email,
					phone:phone,
					address: address
				}
			})
		})
		.catch((error) => {
			console.log('error',error)
			const errorCode = error.code;
			const errorMessage = error.message;
		});
		
	}
	const validationSchema = yup.object({
		email: yup
			.string('Enter your email')
			.email('Enter a valid email')
			.required('Email is required'),
		password: yup
			.string('Enter your password')
			.min(8, 'Password should be of minimum 8 characters length')
			.required('Password is required'),
		name: yup
			.string('Enter you Name')
			.required('Name is required'),
		phone: yup
			.string('Enter Phone')
			.min(10, 'invalid Number')
			.max(11, 'invalid Number')
			.required('Phone is required'),
		address: yup
			.string('Enter address')
			.required('address is required'),
	});
	const formik = useFormik({
		initialValues: {
		  email: '',
		  password: '',
		  name: '',
		  phone: '',
		  address: ''
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
			registerHandler( values.email, values.password, values.address, values.email, values.name )
		}
	})
	return (
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
				<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={overlayDrop}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
				<form onSubmit={formik.handleSubmit}>
					<Box>
						<CustomeInput 
							sx={{ mb: 2, mt: 0 }} 
							variant="standard"
							id="name"
							name="name"
							label="Full Name*"
							value={formik.values.name}
							onChange={formik.handleChange}
							error={formik.touched.name && Boolean(formik.errors.name)}
						/>
						<CustomeInput 
							sx={{ mb: 2, mt: 0 }} 
							variant="standard"
							id="phone"
							name="phone"
							label="Phone Number*"
							value={formik.values.phone}
							onChange={formik.handleChange}
							error={formik.touched.phone && Boolean(formik.errors.phone)}
							helperText={formik.touched.phone && formik.errors.phone}
						/>
						<CustomeInput 
							sx={{ mb: 2, mt: 0 }} 
							variant="standard" 
							id="address"
							name="address"
							label="address Number*"
							value={formik.values.address}
							onChange={formik.handleChange}
							error={formik.touched.address && Boolean(formik.errors.address)}
							helperText={formik.touched.address && formik.errors.address}
						/>
						<CustomeInput 
							sx={{ mb: 2, mt: 0 }}
							variant="standard"
							id="email"
							name="email"
							label="Email"
							value={formik.values.email}
							onChange={formik.handleChange}
							error={formik.touched.email && Boolean(formik.errors.email)}
							helperText={formik.touched.email && formik.errors.email}
						/>
						<CustomeInput 
							sx={{ mb: 4, mt: 0 }} 
							variant="standard" 
							id="password"
							name="password"
							label="Password"
							type="password"
							value={formik.values.password}
							onChange={formik.handleChange}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={formik.touched.password && formik.errors.password}
						/>
					</Box>
					<Box sx={{
						marginBottom: 3,
						display:'flex',
						justifyContent:'space-between'
					}}>
						<Button component={Link} to={'/login'}>Login Here</Button>
						<Button 
							color={'primary'} 
							variant="contained"
							type="submit"
							>Register</Button>
					</Box>
				</form>
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
		</Fade>
	)
}

export default SignupPage
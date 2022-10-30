import { AppWrapper } from './AppStyle.js';
import { Backdrop, CircularProgress, createTheme, ThemeProvider } from '@mui/material';
import { purple, blue } from '@mui/material/colors';
import bgImage from 'src/assets/images/loginBg.jpg'
import './firebase'
import { Route, Router, Routes } from 'react-router-dom';
import AuthRoute from './Routes/AuthRoute';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from 'src/firebase';
import { USER_LOGIN } from './Redux/Reducer/AuthReducer';
import { connect } from 'react-redux';
import PrivateLayout from './app/Layouts/PrivateLayout';
import NotFoundPage from './app/Pages/NotFoundPage/Index.jsx';
import { useCallback } from 'react';
import { registerUser } from './Redux/Action/AuthAction.js';
const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: purple[500],
    },
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      white: '#FFFFFF',
    }

  },
});


function App(props) {

  const { registerUser  } = props;
  console.log(props)
  useEffect(()=> {
    registerUser()
    // onAuthStateChanged(auth, (user) => {
    //   if(user){
    //     USER_LOGIN(true)
    //   }else{
    //     USER_LOGIN(false)
    //   }
    // })
  },[])

  useEffect(()=> { 
    
    // console.log(props.auth) 
  },[])

  // const handleSubmit = useCallback((orderDetails) => {
  // }, [productId, referrer]);

  return (

    <AppWrapper className="App" GlobalColor={'red'}
      style={{
        backgroundImage: `url(${bgImage})`,
        height:'100vh'
      }}
    >
        <ThemeProvider theme={theme}>
          <Routes>a
                {props.auth ? 
                  <Route path='/' element={<PrivateLayout />} />
                  : <Route element={<AuthRoute />} />
                  
              
                }
                <Route path='*' element={<NotFoundPage />} />
          </Routes>  
        </ThemeProvider>
    </AppWrapper>
  );
}

export default connect((state) => ({ ...state.AuthReducer }), {
  registerUser
})(App);

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
  const { loginCheck} = props;

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if(user){
        loginCheck(true)
      }else{
        loginCheck(false)
      }
    })
  },[])

  useEffect(()=> { 
    
    console.log(props.auth) 
  },[])

  return (

    <AppWrapper className="App" GlobalColor={'red'}
      style={{
        backgroundImage: `url(${bgImage})`,
        height:'100vh'
      }}
    >
        <ThemeProvider theme={theme}>
          <Routes>
                {props.auth ? 
                  <Route path='/' element={<PrivateLayout />} />
                  : <Route element={<AuthRoute />} />
                  
              
                }
                <Route path='*' element={<NotFoundPage />} />
          </Routes>
          {/* <AuthRoute /> */}
        </ThemeProvider>
    </AppWrapper>
  );
}
const mapStateToProps = (state) => ({
  auth: state.AuthReducer
});

const mapDispatchToProps = (dispatch) => {
  return {
    loginCheck: (state) => dispatch(USER_LOGIN(state))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

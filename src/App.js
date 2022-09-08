import logo from './logo.svg';
import { AppWrapper } from './AppStyle.js';
import { Provider } from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import { red, purple, blue,white } from '@mui/material/colors';
import LandingPage from './app/Pages/LandingPage';
import PublicRoutes from './Routes/PublicRoutes';
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


function App() {
  return (

    <AppWrapper className="App" GlobalColor={'red'}>
        <ThemeProvider theme={theme}>
          <PublicRoutes />
        </ThemeProvider>
    </AppWrapper>
  );
}

export default App;

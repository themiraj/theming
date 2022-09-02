import logo from './logo.svg';
import { AppWrapper } from './AppStyle.js';
import { Provider } from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import { red, purple } from '@mui/material/colors';
import LandingPage from './app/Pages/LandingPage';
const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: purple[500],
    },
  },
});


function App() {
  return (
    <AppWrapper className="App" GlobalColor={'red'}>
        <ThemeProvider theme={theme}>
          <LandingPage />
        </ThemeProvider>
    </AppWrapper>
  );
}

export default App;

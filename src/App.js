import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <header className="">
          <ResponsiveAppBar />  
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;

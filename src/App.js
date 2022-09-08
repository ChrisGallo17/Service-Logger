import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ServiceForm from './components/ServiceForm';

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
          <ServiceForm />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;

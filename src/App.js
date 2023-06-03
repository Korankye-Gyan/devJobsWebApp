import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { ThemeProvider } from './ThemeContext';
import Header from './components/Header';
import Jobdetails from './pages/Jobdetails';
import Joblist from './pages/Joblist';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  
  const theme = createTheme({
    palette: {
      mode: 'light', // Set the default mode to light
      primary: {
        main: '#5964E0',
      },
    },
  });

  return (
   <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Joblist />} />
            <Route path="/jobDetails/:position" element={<Jobdetails />} />
          </Routes>
        </Router>
     </div>
   </ThemeProvider>
  );
}

export default App;
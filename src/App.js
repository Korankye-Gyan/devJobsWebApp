import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeContext from './ThemeContext';
import Header from './components/Header';
import Jobdetails from './pages/Jobdetails';
import Joblist from './pages/Joblist';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
//import {red,blue} from '@mui/material/colors'


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark':'light',
      //primary: isDarkMode ? red : blue,
    },
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
   };

  return (
   <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode}}>
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
   </ThemeContext.Provider>
  );
}

export default App;
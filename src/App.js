import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeContext from './ThemeContext';
import Header from './components/Header';
import Jobdetails from './pages/Jobdetails';
import Joblist from './pages/Joblist';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AnimatePresence } from "framer-motion"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      background: {
        default: isDarkMode ? '#090C11' : '#F4F6F8',
        secondary:isDarkMode ? '#19202D' : '#ffffff',
      },
    },
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
        <AnimatePresence>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Joblist />} />
              <Route path="/jobDetails/:jobId" element={<Jobdetails />} />
            </Routes>
          </Router>
          </AnimatePresence>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;

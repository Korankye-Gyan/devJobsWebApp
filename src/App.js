import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Header from './components/Header';
import Jobdetails from './pages/Jobdetails';
import Joblist from './pages/Joblist';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Joblist />} />
            <Route path="/jobDetails/:position" element={<Jobdetails />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
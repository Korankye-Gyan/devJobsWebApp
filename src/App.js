import Header from "./components/Header";
import Jobdetails from "./pages/Jobdetails";
import Joblist from "./pages/Joblist";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Joblist/>}/>
          <Route path='/jobDetails/:position' element={<Jobdetails/>}/>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;

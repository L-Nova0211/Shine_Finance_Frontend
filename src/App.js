import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Header from './components/header';
import Dashboard from './views/dashboard';
import Calculator from './views/calculator';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calculator" element={<Calculator />} />          
          <Route path="/*" element={<Navigate to="/dashboard" />} />
        </Routes>       
        <div className='app-background'>
          <div className='app-background-1'></div>
          <div className='app-background-2'></div>
          <div className='app-background-3'></div>
        </div>
      </Router>
    </div>
  );
}

export default App;

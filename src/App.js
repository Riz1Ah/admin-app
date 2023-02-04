import React from 'react'; 
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AuthForm from './components/authForm/AuthForm';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<AuthForm/>}/>
          <Route path='/host'/>
          <Route path='/manage'/>
          <Route path='/monitor'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

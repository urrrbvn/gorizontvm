import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AuthForm from './components/authForm/AuthForm';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<AuthForm/>}/>
        <Route path='/main' element={<MainPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

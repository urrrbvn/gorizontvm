import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavigationComponent from './components/navigationComponent/NavigationComponent';

function App() {
  return (
    <>
      <NavigationComponent/>
      <Router>
        <Routes>
          <Route path='/host'/>
          <Route path='/manage'/>
          <Route path='/monitor'/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

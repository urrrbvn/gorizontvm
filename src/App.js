import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/host'/>
          <Route path='/manage'/>
          <Route path='/monitor'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

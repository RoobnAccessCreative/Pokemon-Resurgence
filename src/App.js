import './App.css';
import Home from './pages/Home';
import Page from './pages/pass';
import Story from './pages/Story';
import React from 'react';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route exact path='/story' Component={Story}></Route>
        <Route exact path='/password' Component={Page}></Route>
      </Routes>
    </Router>
  );
}

export default App;

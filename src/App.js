import React from 'react';
import { Router } from '@reach/router';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Welcome from './components/Welcome';
import WordOrNumber from './components/WordOrNumber';
import Color from './components/Color';
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';

function App() {
  return (
    <div className="jumbotron">
      <NavBar />
        <Router>
          <Home exact path='/' component={Home} />
          <Welcome exact path='/home' component={Welcome} />
          <WordOrNumber exact path='/:input' component={WordOrNumber} />
          <Color exact path='/:word/:color/:bg' component={Color} />
        </Router>
    </div>
  );
}
export default App;

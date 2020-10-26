import React from 'react';
import {Route} from 'react-router-dom'
import Galeria from './components/galeria/galeria';
import Navbar from './components/navBar/navBar';
import Home from './components/home/home';

function App() {
  return (
    <div>
      <Route path='/' component={Navbar}/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/productos' component={Galeria}/>
    </div>
  );
}

export default App;

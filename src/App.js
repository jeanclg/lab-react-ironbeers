import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Beerlist from './components/Beerlist';
import Home from './components/Home';
import Beerdetails from './components/Beerdetails';
import Random from './components/Random';
import Form from './components/Form';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/allbeers" component={Beerlist} />
        <Route exact path="/beer/:id" component={Beerdetails} />
        <Route exact path="/random" component={Random} />
        <Route exact path="/new" component={Form} />
      </BrowserRouter>
    </div>
  );
}

export default App;

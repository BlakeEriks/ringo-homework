import { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Stock from './pages/Stock';

function App() {

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/about" >
          <About />
        </Route>
        <Route
          path="/stocks/:symbol"
          render={routerProps => <Stock {...routerProps} />}
        />
        <Route path="/stocks">
          <Dashboard />
        </Route>
      </Switch>      
    </div>
  );
}

export default App;

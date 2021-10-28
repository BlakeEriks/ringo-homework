import { Route, Switch } from 'react-router';
import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Stocks from './pages/Stocks';
import tickerData from './tickerData';

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
        <Route path="/stocks">
          <Stocks />
        </Route>
      </Switch>      
    </div>
  );
}

export default App;

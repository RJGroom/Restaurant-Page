import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './style.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Order from './Components/Order';
import Contact from './Components/Contact';
import InvalidPage from './Components/InvalidPage';

function App() {
  return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/menu" component={Menu} />
            <Route path="/order" component={Order} />
            <Route path="/contact" component={Contact} />
            <Route component={InvalidPage} />
        </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;

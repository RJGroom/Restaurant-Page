import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './style.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Reservations from './Components/Reservations';
import Contact from './Components/Contact';
import InvalidPage from './Components/InvalidPage';
import Footer from './Components/Footer';

function App() {
  return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/menu" component={Menu} />
            <Route path="/reservations" component={Reservations} />
            <Route path="/contact" component={Contact} />
            <Route component={InvalidPage} />
        </Switch>
        <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;

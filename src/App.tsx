import React from 'react';
import { Switch, Route } from 'react-router-dom';

// styles and assets

import logo from './assets/logo.svg';
import './App.scss';

// components

import TheNavigation from './components/TheNavigation';

// views
import Home from './views/Home';
import Tunes from './views/Tunes';
import About from './views/About';

function App() {
  return (

    <div className="App">

      <header>
        <TheNavigation/>
      </header>

      <main className="content">
        <Switch>
          <Route path="/" component={Home} exact/>
					<Route path="/tunes" component={Tunes} />
					<Route path="/about" component={About} />
        </Switch>
      </main>

      <footer>
        <img src={logo} className="App-logo" alt="logo" />
      </footer>

    </div>
  );
}

export default App;

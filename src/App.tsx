import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import logo from './assets/logo.svg';
import './App.scss';

function App() {
  return (

    <div className="App">

      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tunes">Tunes</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <main className="content">
        <Switch>
          <Route path="/" render={() => <h1>Homepage</h1>} />
					<Route path="/tunes" render={() => <h1>Tunes</h1>} />
					<Route path="/about" render={() => <h1>About</h1>} />
        </Switch>
      </main>

      <footer>
        <img src={logo} className="App-logo" alt="logo" />
      </footer>

    </div>
  );
}

export default App;

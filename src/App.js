import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Messages from "./containers/Messages";
import LocalQuotes from "./containers/LocalQuotes";
import ApiQuotes from "./containers/ApiQuotes";
import Character from './containers/Character';
import Form from './containers/Form';

import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/character">Character</Link>
            <Link to="/localQuotes">Local Quotes</Link>
            <Link to="/apiQuotes">Api Quotes</Link>
            <Link to="/form">Form</Link>
          </nav>
          <div className="App">

            <Route path="/" exact>
              <header className="App-header">
                <h1>Simple React Redux Example</h1>
                <p>This app uses redux, routing, and the api calls to demonstrate basic Redux principles.</p>
                <p>Open your console and use the links above to discover more.</p>
              </header>
            </Route>
            <Route path="/character">
              <Character />
            </Route>
            <Route path="/localQuotes">
              <LocalQuotes />
            </Route>
            <Route path="/apiQuotes">
              <ApiQuotes />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
          </div>
        </Router>
      </section>
    </div>
  );
}

export default App;
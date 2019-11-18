import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Messages from "./containers/Messages";
import LocalQuotes from "./containers/LocalQuotes";

import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/message">Message</Link>
            <Link to="/localQuotes">Local Quotes</Link>
          </nav>
          <div className="App">
            <Route path="/" exact>
              <header className="App-header">
                <h1>Simple React Redux Example</h1>
                <p>This app uses redux, routing, and the api calls to demonstrate basic Redux principles.</p>
                <p>Open your console and use the links above to discover more.</p>
              </header>
            </Route>
            <Route path="/message">
              <Messages />
            </Route>
            <Route path="/localQuotes">
              <LocalQuotes />
            </Route>
          </div>
        </Router>
      </section>
    </div>
  );
}

export default App;
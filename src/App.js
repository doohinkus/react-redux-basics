import React from 'react';
import Messages from "./containers/Messages";
import LocalQuotes from "./containers/LocalQuotes";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Messages />
         <LocalQuotes />
      </header>
    </div>
  );
}

export default App;
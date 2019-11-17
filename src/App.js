import React from 'react';
import Messages from "./Messages";
import './App.css';

function App({ setMessage, setNestMessage, message, secret }) {
  return (
    <div className="App">
      <header className="App-header">
         <h2>Redux</h2>
         <Messages />
      </header>
    </div>
  );
}

export default App;
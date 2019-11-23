import React from 'react';

function Quote({ title, quote, action }){
  return (
    <header className="App-header">
      <h2>{ title }</h2>
      <p>{ quote }</p>
      <button onClick={() => action()}>Get { title } Quote</button>
    </header>
  );
}
export default Quote;
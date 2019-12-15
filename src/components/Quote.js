import React from 'react';

function Quote({ title, quote, action }){
  return (
    <header className="App-header">
      <h2 data-test-id={title}>{ title }</h2>
      <p data-test-id={`${title}-p`}>{ quote }</p>
      <button data-test-id={`${title}-button`} onClick={() => action()}>Get { title } Quote</button>
    </header>
  );
}
export default Quote;
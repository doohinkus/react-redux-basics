import React from 'react';
import { connect } from 'react-redux';
import { setMessage, setNestMessage } from './messageDuck';
import './App.css';

// Component that is connected to Redux
function Messages({ setMessage, setNestMessage, message, secret }){
  return (
    <div className="App">
      <header className="App-header">
         <p>Message: </p>
         <h2>{message}</h2>
         <p>Secret / Nest Message: </p>
         <h2>{secret}</h2>
         <button onClick={() => setMessage("Hello!")}>Set Message</button>
         <button onClick={() => setNestMessage("React!!!")}>Set Secret</button>
         <button onClick={() => { setNestMessage(""); setMessage(""); }}>Clear Messages</button>
      </header>
    </div>
  );
}

// Select ths piece of state we want this component to manage
// Then map it to the component's props eg this.props.message will equal the store's message value:
function mapStateToProps(state) {
  return {
    message: state.message,
    secret: state.nest.message
  }
}
// Map the action to our component
// I am changing the name to demonstrate a point
// It is, however, bad practice to change the names of actions
function mapDispatchToProps(dispatch){
  return {
    setMessage: (message) => dispatch(setMessage(message)),
    setNestMessage: (secret) => dispatch(setNestMessage(secret))
  }
}
// This is how to connect redux to the component
// If you are only mapping actions, or state
// Then you must include a null value
// For example: connect(null, mapDispatchToProps)(App)

// Export the connected component
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
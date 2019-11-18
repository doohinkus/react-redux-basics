import React from 'react';
import { connect } from 'react-redux';
import { setMessage } from '../ducks/messageDuck';
import '../App.css';

// Component that is connected to Redux
function Messages({ setMessage, message }){
  return (
    <header className="App-header">
        <h2>Message: </h2>
        <p>{message}</p>
        <button onClick={() => setMessage("Hello!")}>Set Message</button>
        <button onClick={() => { setMessage(""); }}>Clear Messages</button>
    </header>
  );
}

// Select ths piece of state we want this component to manage
// Then map it to the component's props eg this.props.message will equal the store's message value:
function mapStateToProps(state) {
  return {
    message: state.message,
  }
}
// Map the action to our component
// I am changing the name to demonstrate a point
// It is, however, bad practice to change the names of actions
function mapDispatchToProps(dispatch){
  return {
    setMessage: (message) => dispatch(setMessage(message)),
  }
}
// This is how to connect redux to the component
// If you are only mapping actions, or state
// Then you must include a null value
// For example: connect(null, mapDispatchToProps)(App)

// Export the connected component
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
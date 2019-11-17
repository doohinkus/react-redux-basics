import React from 'react';
import { connect } from 'react-redux';
import { getLocalQuote } from '../ducks/messageDuck';

// Component that is connected to Redux
function LocalQuotes({ getLocalQuote, localQuote }){
  return (
    <div className="App">
      <header className="App-header">
        <h2>Local Quote</h2>
        <p>{localQuote}</p>
        <button onClick={() => getLocalQuote()}>Get Local Quote</button>
      </header>
    </div>
  );
}

// Select ths piece of state we want this component to manage
// Then map it to the component's props eg this.props.message will equal the store's message value:
function mapStateToProps(state) {
  return {
    localQuote: state.localQuote
  }
}
// Map the action to our component
// I am changing the name to demonstrate a point
// It is, however, bad practice to change the names of actions
function mapDispatchToProps(dispatch){
  return {
    getLocalQuote: () => dispatch(getLocalQuote())
  }
}
// This is how to connect redux to the component
// If you are only mapping actions, or state
// Then you must include a null value
// For example: connect(null, mapDispatchToProps)(App)

// Export the connected component
export default connect(mapStateToProps, mapDispatchToProps)(LocalQuotes);
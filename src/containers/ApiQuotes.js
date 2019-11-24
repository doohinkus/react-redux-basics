import React from 'react';
import { connect } from 'react-redux';
import { apiQuote } from '../async/actions';

import Quote from '../components/Quote';

// Component that is connected to Redux
function ApiQuotes({ apiQuote, getApiQuote }){
  return (
    <Quote title="Api" quote={apiQuote} action={getApiQuote} />
  );
}

// Select the piece of state we want this component to manage
// Then map it to the component's props eg this.props.message will equal the store's message value:
function mapStateToProps(state) {
  const { quote } =  state.apiQuoteReducer;
  // Use custom function to add random quote to store
  return {
    apiQuote: quote
  }
}
// Map the action to our component
// I am changing the name to demonstrate a point
// It is, however, bad practice to change the names of actions
function mapDispatchToProps(dispatch){
  return {
    getApiQuote: () => dispatch(apiQuote())
  }
}
// This is how to connect redux to the component
// If you are only mapping actions, or state
// Then you must include a null value
// For example: connect(null, mapDispatchToProps)(App)

// Export the connected component
export default connect(mapStateToProps, mapDispatchToProps)(ApiQuotes);
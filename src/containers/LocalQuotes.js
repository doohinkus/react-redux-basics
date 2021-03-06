import React from 'react';
import { connect } from 'react-redux';
import { getLocalQuote, localQuotesArray, getRandomElementFromArray  } from '../ducks/localQuoteDuck';
import Quote from '../components/Quote';
// import { apiQuote } from '../async/actions'; 

// Component that is connected to Redux
function LocalQuotes({ getLocalQuote, localQuote }){
  return (
    <Quote title="Local" quote={localQuote} action={getLocalQuote} />
  );
}



// Select the piece of state we want this component to manage
// Then map it to the component's props eg this.props.message will equal the store's message value:
function mapStateToProps(state) {
  // We can also imitate selectors here
  // const { localQuotes }  = state.localQuoteReducer;
  // Use selector to grab the localQuotes array
  const quotes = localQuotesArray(state);
  // Use custom function to add random quote to store
  return {
    localQuote: getRandomElementFromArray(quotes),
  }
}
// Map the action to our component
// I am changing the name to demonstrate a point
// It is, however, bad practice to change the names of actions
function mapDispatchToProps(dispatch){
  return {
    getLocalQuote: () => dispatch(getLocalQuote()),
  }
}
// This is how to connect redux to the component
// If you are only mapping actions, or state
// Then you must include a null value
// For example: connect(null, mapDispatchToProps)(App)

// Export the connected component
export default connect(mapStateToProps, mapDispatchToProps)(LocalQuotes);
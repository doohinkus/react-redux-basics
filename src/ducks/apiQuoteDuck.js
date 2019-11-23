// Actions
export const SET_QUOTE = "SET_QUOTE";
export const GET_API_QUOTE = "GET_API_QUOTE";


// Action Creators
export function setQuote (quote){
  return {
    type: SET_QUOTE,
    payload: quote
  }
}
export function getQuote(){
  return {
    type: GET_API_QUOTE
  }
}
// async action is set in async
// it gets a quote, the dispatches setQuote

// Default state
const  DEFAULT_STATE = {
  quote: "Some quote",
}

// Reducer
export function apiQuoteReducer(state=DEFAULT_STATE, action){
  // ...state returns a copy of the old state
  // we are not mutating state
  // we simply add a new copy with updated information
  // this allows us to track changes easilywith redux logger

  switch (action.type){
    case(SET_QUOTE):
      return {
        ...state,
        quote: action.payload
      }
    case(GET_API_QUOTE):
    default:
      return state;
  }
}


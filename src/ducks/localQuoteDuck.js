// Actions
export const SET_QUOTE = "SET_QUOTE";
export const GET_LOCAL_QUOTE = "GET_LOCAL_QUOTE";


// Action Creators
export function setQuote (quote){
  return {
    type: SET_QUOTE,
    payload: quote
  }
}
// This action helps trace what's going on
export function getLocalQuote (){
  return {
    type: GET_LOCAL_QUOTE
  }
}



// Default state
export const  DEFAULT_STATE = {
  quote: "",
  localQuotes: [
    "It is by will alone I set my mind in motion.",
    "A penny saved is a penny earned.",
    "Waste not, want not.",
    "To see a world in a grain of sand....",
    "Happy wife, happy life.",
    "The world harmonioulsy confused, where order in variety we see. And where, though, all things differ: All agree."
  ]
}

// Reducer
export function localQuoteReducer(state=DEFAULT_STATE, action){
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
    case(GET_LOCAL_QUOTE):
      return {
        ...state
      }
    default:
      return state
  }
}




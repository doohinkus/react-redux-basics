import { createStore, applyMiddleware } from "redux";
import { logger } from 'redux-logger';
// random quote local
// then with api 
// http://quotes.stormconsultancy.co.uk/random.json
// Actions
export const SET_MESSAGE = "SET_MESSAGE";
export const GET_LOCAL_QUOTE = "GET_LOCAL_QUOTE";


// Action Creators
export function setMessage (message){
  return {
    type: SET_MESSAGE,
    payload: message
  }
}
export function getLocalQuote (){
  // Actions don't require payloads, but they must have types
  return {
    type: GET_LOCAL_QUOTE,
  }
}

// Default state
export const  DEFAULT_STATE = {
  message: "",
  localQuotes: [
    "It by will alone I set my mind in motion.",
    "A penny saved is a penny earned.",
    "Waste not, want not.",
    "To see a world in a grain of sand....",
    "Happy wife, happy life.",
    "The world harmonioulsy confused, where order in variety we see. And where, though, all things differ: All agree."
  ],
  localQuote: "",
  apiQuotes: []
}

// Reducer
export function messageReducer(state=DEFAULT_STATE, action){
  // ...state returns a copy of the old state
  // we are not mutating state
  // we simply add a new copy with updated information
  // this allows us to track changes easilywith redux logger

  switch (action.type){
    case(SET_MESSAGE):
      return {
        ...state,
        message: action.payload
      }
    case(GET_LOCAL_QUOTE):
      return {
        ...state,
        localQuote: action.payload
        
      }
    default:
      return state;
  }
}

// Move this to index when we combine reducers

// Apply middleware
// This middleware lets us see how the store changes via console logs
const middleware = applyMiddleware(logger);

// Now we create the store, using our reducer
export const messageStore =  createStore(messageReducer, middleware);

import { createStore, applyMiddleware } from "redux";
import { logger } from 'redux-logger';
// Actions
export const SET_MESSAGE = "SET_MESSAGE";
export const SET_NEST_MESSAGE = "SET_NEST_MESSAGE";


// Action Creators
export function setMessage (message){
  return {
    type: SET_MESSAGE,
    payload: message
  }
}
export function setNestMessage (message){
  return {
    type: SET_NEST_MESSAGE,
    payload: message
  }
}

// Default state
export const  DEFAULT_STATE = {
  message: "",
  nest: {
    message: ""
  }
}

// Reducer
export function messageReducer(state=DEFAULT_STATE, action){
  // ...state returns a copy of the old state
  // we are not mutating state
  // we simply add a new copy with updated information
  // this allows us to track changes easily
  // console.log(action.type);

  switch (action.type){
    case(SET_MESSAGE):
      return {
        ...state,
        message: action.payload
      }
    case(SET_NEST_MESSAGE):
      return {
        ...state,
        nest: {
          message: action.payload
        }
      }
    default:
      return state;
  }
}
// Apply middleware
// This lets us see how the store changes via console logs
const middleware = applyMiddleware(logger);

// Now we create the store, using our reducer
export const messageStore =  createStore(messageReducer, middleware);

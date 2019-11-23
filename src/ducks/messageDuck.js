
// Actions
export const SET_MESSAGE = "SET_MESSAGE";


// Action Creators
export function setMessage (message){
  return {
    type: SET_MESSAGE,
    payload: message
  }
}

// Default state
export const  DEFAULT_STATE = {
  message: "Default message"
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
    default:
      return state;
  }
}


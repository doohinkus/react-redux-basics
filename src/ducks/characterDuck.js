//  Actions
const MOVE_SPRITE = "MOVE_SPRITE";

// Action creators

export function moveSprite(position){
  // position is an object with  and y
  // { x: 0, y: 0}
  return {
    type: MOVE_SPRITE,
    payload: position
  }
}


//  Default state

const DEFAULT_STATE = {
  sprite: {
    direction: null,
    x_position: 0,
    y_position: 0,
    s_width: 10,
    s_height: 10
  },
  gameBoard: {
    map: [
      [0,0,1,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,1,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,1,0,0,0,1,0],
      [0,0,0,0,0,0,0,0,0,0],
    ],
    width: 500,
    height: 300
  }
  
}

// Reducer

export function characterReducer(state=DEFAULT_STATE, action){
  switch(action.type){
    case (MOVE_SPRITE):
      return {
        ...state,
        sprite: {
          ...state.sprite,
          x_position: action.payload.x_position,
          y_position: action.payload.y_position
        }
      }
    default:
      return state
  }
}
import React from 'react';
import { connect } from 'react-redux';
import { moveSprite } from '../ducks/characterDuck';


function Character({ x_position, y_position, moveSprite, setDirection }){
  function moveCharacter(direction){
    const width = 10;
    switch(direction){
      case ("UP"):
        moveSprite({ x_position, y_position: y_position - width })
        break;
      case ("DOWN"):
        moveSprite({ x_position, y_position: y_position + width })
        break;
      case ("LEFT"):
        moveSprite({ x_position: x_position - width, y_position })
        break;
      case ("RIGHT"):
        moveSprite({ x_position: x_position + width, y_position })
        break;
      default: 
        return null
    }
  }
  function setDirection(keyCode){
    switch (keyCode){
      case 38: 
        return "UP"
      case 40:
        return "DOWN"
      case 37:
        return "LEFT"
      case 39:
       return "RIGHT"
      default:
        return null
    }
  }
  return (
    <div tabIndex={0} onKeyDown={e => moveCharacter(setDirection(e.keyCode))}>
      <h2>Character</h2>
      <p>x position: {x_position}</p>
      <p>y position: {y_position}</p>
    </div>
  )
}

function mapStateToProps(state){
  const { x_position, y_position } = state.characterReducer.sprite;
  return {
    x_position,
    y_position
  }
}
function mapDispatchToProps(dispatch){
  return {
    moveSprite: (position) => dispatch(moveSprite(position))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Character);
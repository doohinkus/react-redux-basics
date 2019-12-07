import React from 'react';
import { connect } from 'react-redux';
import { moveSprite } from '../ducks/characterDuck';
import Obstacles from '../components/Obstacles';



function Character({ 
  x_position,
  y_position,
  s_width,
  s_height,
  map,
  width,
  height,
  moveSprite, 
  setDirection }){

  
  function moveCharacter(keyCode){
    let direction = null;
    console.log(height)
    switch (keyCode){
      case 38: 
        direction = "UP"
        break
      case 40:
        direction =  "DOWN"
        break
      case 37:
        direction = "LEFT"
        break
      case 39:
       direction ="RIGHT"
       break; 
      }
    switch(direction){
      case ("UP"):
        if (y_position !== 0){
          moveSprite({ x_position, y_position: y_position - s_height })
        }
        break;
      case ("DOWN"):
        if (y_position !== height - s_height){
          moveSprite({ x_position, y_position: y_position + s_height })
        }
        break;
      case ("LEFT"):
        if (x_position !== 0){
          moveSprite({ x_position: x_position - s_width, y_position })
        }
        break;
      case ("RIGHT"):
        if (x_position !== width - s_width){
          moveSprite({ x_position: x_position + s_width, y_position })
        }
        break;
      default: 
        return null
    }
  
   
  }

  return (
    <div>
      <h2>Character</h2>
      <p>Click on box then use arrow keys to move sprite.</p>
      <p>x position: {x_position}</p>
      <p>y position: {y_position}</p>
      <div
        tabIndex={0} 
        onKeyDown={e => moveCharacter(e.keyCode)} 
        style={
        {
          position: "relative",
          margin: "2em auto",
          backgroundColor: "rgba(255,255,255,.1)",
          width: "500px",
          height: "300px",
          border: "2px solid #222"
        }
      }>
        <div style={
          {
            top: y_position,
            left: x_position,
            position: "absolute",
            backgroundColor: "#efefef",
            width: "10px",
            height: "10px"
          }
        }/>
       <Obstacles 
        array={map} 
        obstacleId={1} 
      />
      </div>
    </div>
  )
}

function mapStateToProps(state){
  const { x_position, y_position, s_width, s_height } = state.characterReducer.sprite;
  const { map, width, height } = state.characterReducer.gameBoard;
  return {
    x_position,
    y_position,
    s_width,
    s_height,
    map,
    width,
    height
  }
}
function mapDispatchToProps(dispatch){
  return {
    moveSprite: (position) => dispatch(moveSprite(position))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Character);
import React from 'react';
import { connect } from 'react-redux';
import { moveSprite } from '../ducks/characterDuck';


function Character({ x_position, y_position, moveSprite, setDirection }){
  // 50px
  const map = [
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0],
  ];
  
  function moveCharacter(keyCode){
    let direction = null;
    const sprite = 10;
    const height = 300;
    const width = 500;
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
          moveSprite({ x_position, y_position: y_position - sprite })
        }
        break;
      case ("DOWN"):
        if (y_position !== height - sprite){
          moveSprite({ x_position, y_position: y_position + sprite })
        }
        break;
      case ("LEFT"):
        if (x_position !== 0){
          moveSprite({ x_position: x_position - sprite, y_position })
        }
        break;
      case ("RIGHT"):
        if (x_position !== width - sprite){
          moveSprite({ x_position: x_position + sprite, y_position })
        }
        break;
      default: 
        return null
    }
  
   
  }
 
  // function setDirection(keyCode){
  //   switch (keyCode){
  //     case 38: 
  //       return "UP"
  //     case 40:
  //       return "DOWN"
  //     case 37:
  //       return "LEFT"
  //     case 39:
  //      return "RIGHT"
  //     default:
  //       return null
  //   }
  // }
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
        {map.map((x, xIndex) => {
          return x.map((y, yIndex) => {
            return (
              map[xIndex][yIndex] === 1 ? (<div 
                style={
                  {
                    width: "50px",
                    height: "50px",
                    backgroundColor: "rgba(234,23,1,.3)",
                    position: "absolute",
                    top: xIndex * 50,
                    left: yIndex * 50
                  }
                }
              />) : null
           
            )
          })
        })}
      </div>
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
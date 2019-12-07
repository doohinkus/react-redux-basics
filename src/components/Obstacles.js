import React from 'react';

function Obstacles({ array, obstacleId }){
  return (
    <React.Fragment>
      { 
        array.map((x, xIndex) => {
          return x.map((y, yIndex) => {
            return (
              array[xIndex][yIndex] === obstacleId ? (
                <div 
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
                  key={`${xIndex}${yIndex}`}
                />
              ) : null
          
            )
          })
        }) 
      }
    </React.Fragment>
  )
}

export default Obstacles;
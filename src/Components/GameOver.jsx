import React from 'react'

export default function GameOver(props) {
    
    let {gameOver} = props;

  return (
    <div>
        <h2 className='mt-3'>{gameOver && <span style={{color:'springgreen'}}>Game Over!!!</span>} </h2>
    </div>
  )
}

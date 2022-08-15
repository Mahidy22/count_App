import React, { useState } from 'react'
import GameOver from './GameOver';
import IsEvenOdd from './IsEvenOdd';
import style from './CountApp.module.css';

export default function Main() {

    let [count, setCount] = useState(0);
    let [gameOver, setGameOver] = useState(false);


    const decrement =()=>{
        setCount((prevCount=> prevCount - 1))
    }

    const increment =()=>{
        if(count === 10){
            setGameOver(true)
        }else{
        setCount((prevCount=>prevCount + 1))
        }
    }
    
    const resetBtn = ()=>{
        setCount(0);
        setGameOver(false)
    }


  return (
    <div className={style.container}>
        <h1>Count App</h1>
        <h2>Count : <span style={{color:'crimson'}}>{count}</span></h2>
        <button onClick={()=>decrement()} 
        disabled={gameOver || count === 0}
        className='btn btn-info m-2'>-</button>

        <button onClick={()=>increment()} 
        disabled={gameOver} 
        className='btn btn-info m-2'>+</button>

        <IsEvenOdd count={count}/>
        <GameOver gameOver={gameOver}/>

        <button onClick={resetBtn} className='btn btn-danger'>Reset</button>
    </div>
  )
}

import React, { useState, useRef, useEffect} from "react"
import {BsPlayFill} from 'react-icons/bs'
import {BiPause} from 'react-icons/bi'
import {BsCircleFill} from 'react-icons/bs'
import {RiArrowGoBackLine} from 'react-icons/ri'



import './StopWatch.css'
const StopWatch = () => {

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [stop, setStop] = useState(false)
  const [pause, setPause] = useState(false)


  const intervalRef = useRef(null)

  if(seconds >= 60) {
    setSeconds((prevState) => prevState = 0)
    setMinutes((prevState) => prevState + 1)
  }

  const handlePlay = () => {
    setPause(!pause)
    intervalRef.current = setInterval(()=>{
      setSeconds((prevState) => prevState + 1)
  },1000)
   
  }

  const handlePause =() => {
    setPause(!pause)
    clearInterval(intervalRef.current)
  }

  const handleStop =()=> {
    if(!stop) {
    setPause(!pause)
    clearInterval(intervalRef.current)
    setSeconds((prevState)=> prevState = 0)
    setMinutes((prevState)=> prevState = 0)
    } 
  }
    return (
    <div className="stopwatch">
      <h1>StopWatch in React</h1>
      <h2>{minutes}:{seconds}</h2>
      <div className="buttons">
        {!pause ? <button className='play' ><BsPlayFill size={20}/><span>PLAY</span></button> : <button className='pause'onClick={handlePause}><BiPause size={25}/><span>PAUSE</span></button>}
        <button className='stop' onClick={handleStop}><BsCircleFill size={12}/><span>STOP</span></button>
        </div>
        <div className="button-back" ><RiArrowGoBackLine size={30}/></div>
     </div>
    )
}

export default StopWatch
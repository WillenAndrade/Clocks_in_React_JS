import { useState, useRef, useEffect } from 'react'
import './Timer.css'
import {BsPlayFill} from 'react-icons/bs'
import {BiPause} from 'react-icons/bi'
import {BsCircleFill} from 'react-icons/bs'
import {RiArrowGoBackLine} from 'react-icons/ri'
import TimerClock from './TimerClock'

const Timer = () => {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [isOn, setIsOn] = useState(false)
    const [pause, setPause] = useState(false)
    const [stop, setStop] = useState(false)
    const intervalRef = useRef(null)

    const handleStart = (e) => {
        e.preventDefault()
       if(!stop) {
        setIsOn(!isOn)
        intervalRef.current = setInterval(()=>{
                setSeconds((prevState) => prevState - 1)
        }, 1000)
       } else {
        setIsOn(!isOn)
        intervalRef.current = setInterval(()=>{
                setSeconds((prevState) => prevState - 1)
        }, 1000)
        setPause(!pause)
        setStop(!stop)
       }
    }

    if(seconds < 0) {
        setMinutes((prevState) => prevState - 1)
        setSeconds((prevState) => prevState = 59)
    } else if (seconds > 60) {
        setSeconds((prevState) => prevState = 60)
    } 

    if(minutes < 0) {
        setMinutes((prevState) => prevState = 0)
    } else if(minutes > 60) {
        setMinutes((prevState) => prevState = 60)
    } 

    if(seconds < 1 && minutes < 1) {   
        clearInterval(intervalRef.current)      
    }

    const handlePlay = () => {
        if(!stop) {
        setPause(!pause)
        intervalRef.current = setInterval(()=>{
        setSeconds((prevState) => prevState - 1)
      },1000)
        }
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
        setStop(!stop)
        setIsOn(!isOn)
        }
      }

    return(
        <div className='timer'>
            <h1>Timer in React</h1>
            {!isOn ? <div className="set-clock">
                <div className="input-clock">
                    <input type="number" placeholder='00' min='1' max="60" onChange={(e)=>setMinutes(e.target.value)}/>:
                    <input type="number" placeholder='00' min="1" max="60" onChange={(e)=>setSeconds(e.target.value)}/>
                </div>
                <button className='play' onClick={handleStart}><BsPlayFill size={20}/><span>START</span></button>
            </div> : <TimerClock minutes={minutes} seconds={seconds} />}
             <div className="buttons">
            {pause ? <button className='play' onClick={handlePlay}><BsPlayFill size={20}/><span>PLAY</span></button> : <button className='pause' onClick={handlePause}><BiPause size={25}/><span>PAUSE</span></button>}
            <button className='stop' onClick={handleStop} ><BsCircleFill size={12}/><span>STOP</span></button>
            </div>
            <div className="button-back"><RiArrowGoBackLine size={30}/></div>
        </div>
    )
}
export default Timer    
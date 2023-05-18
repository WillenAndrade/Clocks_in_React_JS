import { useState, useRef, useEffect } from 'react'
import TimerClock from './TimerClock'
import './Timer.css'

const Timer = () => {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [isOn, setIsOn] = useState(false)
    const intervalRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsOn(!isOn)
        intervalRef.current = setInterval(()=>{
                setSeconds((prevState) => prevState - 1)
                
        }, 70)
    }

    if(seconds < 1 ) {
        setMinutes((prevState) => prevState - 1)
        setSeconds((prevState) => prevState = 60)
    } 

    if(seconds < 1 && minutes < 1) {   
        clearInterval(intervalRef.current)      
    }

    return(
        <div className='timer'>
            <h1>Timer in React</h1>
            <div className="set-clock">
                <div className="input-clock">
                    <input type="number"  onChange={(e)=>setMinutes(e.target.value)}/>:
                    <input type="number"  onChange={(e)=>setSeconds(e.target.value)}/>
                </div>
                <button id='start' onClick={handleSubmit}>SET</button>
            </div>
             {isOn && <TimerClock minutes={minutes} seconds={seconds}/>}
        </div>
    )
}

export default Timer
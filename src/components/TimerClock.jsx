import { useState, useRef, useEffect } from 'react'
import './Timer.css'

const TimerClock = ({minutes, seconds}) => {
    
    return(
        <div>
            {minutes.length == 0 && seconds.length == 0 ? "00:00" : <h2>{minutes}:{seconds}</h2> }
        </div>
    )
}


export default TimerClock
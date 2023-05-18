import react, {useState, useRef} from 'react'

const TimerClock = ({minutes, seconds}) => {

    return(
        <div>
            <h2>{minutes < 10 ? `0${minutes}`: minutes}:{seconds < 10 ? `0${seconds}`: seconds}</h2>
        </div>
    )
}

export default TimerClock
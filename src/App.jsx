import { useState, useRef, useEffect } from 'react'

import './App.css'
import StopWatch from './components/StopWatch'
import Timer from './components/Timer'
import AlarmClock from './components/AlarmClock'
import {BsStopwatch} from 'react-icons/bs'
import {BsAlarm} from 'react-icons/bs'
import {GiStopwatch} from 'react-icons/gi'


function App() {
  const [stopWatch, setStopWatch]= useState(false)
  const [timer, setTimer] = useState(false)
  const [alarmClock, setAlarmClock]= useState(false)
  const [divIsOn, setDivIsOn] = useState(true)

  const handleStopWatch = () => {
    setDivIsOn(!divIsOn)
    setStopWatch(!stopWatch)
  }

  const handleTimer = () => {
    setDivIsOn(!divIsOn)
    setTimer(!timer)
  }

  const handleAlarmClock = () => {
    setDivIsOn(!divIsOn)
    setAlarmClock(!alarmClock)
  }
  
  return (
    <div className='app'>
      <div className="watch">
      {divIsOn && 
        <>
        <h1> Click in some clock</h1>
        <div className="clock-container">
          <div onClick={handleStopWatch}><BsStopwatch size={33}/></div>
          <div onClick={handleTimer}><GiStopwatch size={35}/></div>
          <div onClick={handleAlarmClock}><BsAlarm size={30}/></div>
        </div>
        </>
      }
      {stopWatch && <StopWatch/>}
      {timer && <Timer />}
      {alarmClock && <AlarmClock />}
      </div>
      
    </div>
  )
}

export default App

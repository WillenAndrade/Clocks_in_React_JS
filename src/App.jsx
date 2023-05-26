import { useState, useRef, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import StopWatch from './components/StopWatch'
import Timer from './components/Timer'
import AlarmClock from './components/AlarmClock'
import './App.css'
import Home from './components/Home'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StopWatch" element={<StopWatch />} />
        <Route path="/Timer" element={<Timer />} />
        <Route path="/AlarmClock" element={<AlarmClock />} />
      </Routes>
    </div>
  )
}

export default App

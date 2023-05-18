import { useState, useRef, useEffect } from 'react'

import './App.css'
import StopWatch from './components/StopWatch'
import Timer from './components/Timer'


function App() {
  
  return (
    <div className='app'>
      <div className="watch">
        <Timer />
      </div>
      
    </div>
  )
}

export default App

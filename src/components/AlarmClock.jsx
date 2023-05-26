import react, { useState, } from 'react'
import {Link} from 'react-router-dom'
import {RiArrowGoBackLine} from 'react-icons/ri'
import './AlarmClock.css'

const AlarmClock = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [alarmHours, setAlarmHours] = useState(0);
  const [alarmMinutes, setAlarmMinutes] = useState(0);

  const clock = () => { 
      let date = new Date();
      let hh = date.getHours(),
        mm = date.getMinutes(),
        ss = date.getSeconds();
          //Fiz o if else abaixo pois o horario do JS estava alterado em 12 horas
        if(hh > 12) {
          hh = hh - 12
        } else if(hh < 12){
          hh = hh + 12
        }
        setHours(hh);
        setMinutes(mm);
        setSeconds(ss);
    };
    setInterval(clock, 1000);

    const handleAlarm = (e) => {
      e.preventDefault()
      window.alert(`${alarmHours} and ${alarmMinutes}`)
      turnOn()
    }

    const turnOn = () => {
      setInterval(()=>{
        if(alarmHours == hours && alarmMinutes == minutes) {
          window.alert("Despertar")
        }
      }, 1000)
    }
    
    return(
        <div className="alarm">
            <h1>Alarm</h1>
            <div className="inputs">
              <input type="number" className="input-alarm" placeholder='00' onChange={(e)=>setAlarmHours(e.target.value)} />:
              <input type="number" className="input-alarm" placeholder='00' onChange={(e)=>setAlarmMinutes(e.target.value)}/>
            </div>
            <button onClick={handleAlarm}>SET</button>
            <h2>{hours < 10 ? `0${hours}`: hours}:{minutes < 10 ? `0${minutes}`: minutes}:{seconds < 10 ? `0${seconds}`: seconds}</h2>
            <div className="alarm-list"></div>
            <div className="button-back" ><Link to="/"><RiArrowGoBackLine size={30}/></Link></div>
        </div>
    )
}

export default AlarmClock
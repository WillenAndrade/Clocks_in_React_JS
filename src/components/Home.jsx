import {useState} from 'react'
import { Link } from "react-router-dom";
import {BsStopwatch} from 'react-icons/bs'
import {BsAlarm} from 'react-icons/bs'
import {GiStopwatch} from 'react-icons/gi'
import '../App.css'

const Home = () => {
   const [title, setTitle] = useState("")

    return(
            <div className="watch">
               <h1>Clock</h1>
                <div className="clock-container">
                  <div onMouseEnter={()=>setTitle("StopWatch")} onMouseLeave={()=>setTitle("")}><Link to="/StopWatch"><BsStopwatch size={33}/></Link></div>
                  <div onMouseEnter={()=>setTitle("Timer")} onMouseLeave={()=>setTitle("")}><Link to="/Timer"><GiStopwatch size={35}/></Link></div>
                  <div onMouseEnter={()=>setTitle("Alarm")} onMouseLeave={()=>setTitle("")}><Link to="/AlarmClock"><BsAlarm size={30}/></Link></div>
               </div>
               <div className="clock-title">
               <h3>{title}</h3>
               </div>
            </div>
    )
}
export default Home
import React, { useState , useEffect} from "react";
import "./index.css";

function Timer (props) {
  const[counter,setCounter]=useState(props.initial);
 
  let timer=null
  useEffect(()=>{
    timer=counter>0 && setInterval(()=>setCounter(counter-1),1000);
    return ()=>clearInterval(timer);
  },[counter])
  const handleTimer=()=>{
    clearInterval(timer);
  }
  return (
    <div className="mt-100 layout-column align-items-center justify-content-center">
        <div className="timer-value" data-testid="timer-value">{counter}</div>
        <button className="large" data-testid="stop-button" onClick={handleTimer}>Stop Timer</button>
    </div>
  );
}
export default Timer;

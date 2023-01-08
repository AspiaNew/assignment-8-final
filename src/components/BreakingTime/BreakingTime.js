import { useEffect, useState } from "react";
import"./BreakingTime.css"
const BreakingTime=({time})=>{
    const[pickedTime,setPickedTime]=useState(0)
    const betterTime=(breakTime)=>{
        setPickedTime(breakTime);
        localStorage.setItem("breakTime",breakTime);
    }
    useEffect(()=>{
        const keepTime=localStorage.getItem("breakTime")
        setPickedTime(pickedTime ? pickedTime : 0);
    },[pickedTime]);
    return(
        <div>
            <h4 className='mt-4 mb-2 px-3'>
Add a Break
            </h4>
            <div className="justify-content-evenly radio-buttons py-2" style={{"background":"rgb(220,220,220"}}>
<div className="shape">
<input className="input-box select-item" name="option" type="radio" id="option1" value="5"/>
<label onClick={()=>betterTime(5)} className="label-for-shape" htmlFor="option1">
    5s
</label>
</div>
<div className="shape">
<input className="input-box select-item" name="option" type="radio" id="option2" value="10"/>
<label onClick={()=>betterTime(10)} className="label-for-shape" htmlFor="option2">
    10s
</label>
</div>
<div className="shape">
<input className="input-box select-item" name="option" type="radio" id="option3" value="15"/>
<label onClick={()=>betterTime(15)} className="label-for-shape" htmlFor="option3">
    15s
</label>
</div>
<div className="shape">
<input className="input-box select-item" name="option" type="radio" id="option20" value="20"/>
<label onClick={()=>betterTime(20)} className="label-for-shape" htmlFor="option4">
    20s
</label>
</div>
            </div>
            {/* <Time time={time} pickedTime={pickedTime}></Time> */}
        </div>
    )
}
export default BreakingTime;
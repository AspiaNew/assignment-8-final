import { useEffect, useState } from "react"

const Body = () =>{
    const [time,setTime] = useState(0);
const addList=(preferTIme)=>{
    setTime(time+preferTIme);
}
useEffect(()=>{
    console.log(time);
},[time]);
return(
    <div>
        <div className="mx-3">
<div className="row">
    <div className="col-12 col-md-8">
<h3>Select Today's Club</h3>

    </div>
    <div className="col-12 col-md-4 about-part">
        <div style={{"top":"0","position":"sticky"}}>

        </div>

    </div>
</div>
        </div>
    </div>
)
}
export default Body;
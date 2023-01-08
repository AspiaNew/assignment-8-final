import React from "react";

import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Beat=({beat,setBeat})=>{
    const warn=()=>{
        toast.success("Congratulations!!")
    }
    return(
        <div className="my-4">
<div className="p-4 my-2" style={{"background":"rgb(220,220,220"}}>
    <h4>Joined Time:{beat}s</h4>

</div>
<div className="my-2 p-3" style={{"background":"rgb(220,220,220"}}>
    <h4>Break time:{setBeat}s</h4>

</div>
<div>
    <button onClick={warn} className='btn w-100 my-3 btn-success'></button>
    <ToastContainer/>
</div>
        </div>
    )
}
export default Beat;
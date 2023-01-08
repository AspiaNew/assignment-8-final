import React from "react";
import './Details.css'
const Details=()=>{
    return(
        <div>
            <div className="personal d-flex align-items-center justify-content-center">
<div className="text-center">
    <h4>Piya Chowdhury</h4>
<p><small className="text-light">Khulna,Bangladesh</small></p>
</div>
            </div>
            <div className="rounded mx-3 justify-content-between py-3 px-3 my-3 d-flex" style={{"background":"rgb(220,220,220"}}>
<div>
    <h4>50kg</h4>
    <h5 className="test-light">Weight</h5>
</div>
<div>
<h4>5.4</h4>
<h5 className="text-light">Height</h5>
</div>
<div>
    <h4>21 years</h4>
    <h5 className="text-light">Age</h5>
</div>
            </div>
        </div>
    )
}
export default Details;
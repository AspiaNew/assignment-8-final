import React from "react";
import"./Club.css"
const Club=(props)=>{
    const{id,image,name,info,time}=props.club;
    return(
        <div className="col-12 col-sm-6 col-lg-4 g-1">
            <div className="card">
<img src={image} className="card-image" alt=""/>
<div className="card-body">
    <h3 className="card-title">{name}</h3>
<p className="card-text text-primary">{info}</p>
<p className="card-text">Time:{time}s</p>
<button onClick={()=>props.add(time)} className='btn btn-primary mx-0 fw-bolder'>Add To List</button>
</div>
            </div>

        </div>
    )
}
export default Club;
import { useEffect, useState } from "react"
import Club from "../Club/Club";
const ClubPart=(props)=>{
    const[teams,setTeams]=useState([]);
useEffect(()=>{
    fetch("catalogue.json")
    .then(res=>res.json())
    .then(data=>setTeams(data))
},[]);
return(
    <div className="rows">
{
teams.map(team=> <Club team={team} add={props.add} key={team.id}></Club> )
}
    </div>
)
}
export default ClubPart;
import {useEffect, useState} from "react";
import {getMissions} from "../../services/space.api.axio";
import Space from "./Space";
import "./spaceCss.css";

export default function SpaceX () {
let [mission,setMission] = useState([]);

useEffect(()=>{
    getMissions().then(value => setMission(value.data))
})

       return (
        <div className='mainSpace'>
            <h1 className='headSpace'> SpaceX launches</h1>

            <div className='launches'>{mission.filter(({launch_year}) => launch_year !== "2020").map(value => <Space item={value}/>)}</div>
        
        </div>
    );
}
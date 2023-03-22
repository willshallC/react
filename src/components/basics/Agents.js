import React,{useState} from "react";
import "./Agents.css"
import Radianites from "./RadianitesApi";
import AgentsCards from "./AgentsCard";

const Agents = () =>{

    const [rad, setRad] = useState(Radianites);
    return(<div>
        <div className="nav-bar">
            <button className="btn">Duelists</button>
            <button className="btn">Controllers</button>
            <button className="btn">Sentinels</button>
            <button className="btn">Initiators</button>
            <button className="btn">Maps</button>
        </div>
        <AgentsCards rad={rad} />
    </div>);
}

export default Agents;
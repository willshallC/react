import React,{useState} from "react";
import "./Agents.css"
import Radianites from "./RadianitesApi";
import AgentsCards from "./AgentsCard";

const Agents = () =>{

    const [rad, setRad] = useState(Radianites);
    console.log(rad);
    return(<div>
        <AgentsCards rad={rad} />
    </div>);
}

export default Agents;
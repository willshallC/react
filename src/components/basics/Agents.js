import React,{useState} from "react";
import "./Agents.css"
import Radianites from "./RadianitesApi";
import AgentsCards from "./AgentsCard";


const Agents = () =>{

    const [rad, setRad] = useState(Radianites);

    const filterData = (category) =>{
        const newList = Radianites.filter((curElm)=>{
            return curElm.category === category;
        })
        setRad(newList);
    }
    return(<div>
        <div className="nav-bar">
            <div className="btn-container">
                <button className="btn" onClick={()=>{filterData("Duelist")}}>Duelists</button>
                <button className="btn" onClick={()=>{filterData("Controller")}}>Controllers</button>
                <button className="btn">Sentinels</button>
                <button className="btn">Initiators</button>
                <button className="btn">Maps</button>
            </div>
        </div>
        <AgentsCards rad={rad} />
    </div>);
}

export default Agents;
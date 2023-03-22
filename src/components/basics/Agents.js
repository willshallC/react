import React,{useState} from "react";
import "./Agents.css"
import Radianites from "./RadianitesApi";
import AgentsCards from "./AgentsCard";
import NavBar from "./NavBar";


const Agents = () =>{

    const [rad, setRad] = useState(Radianites);

    const filterData = (category) =>{
        const newList = Radianites.filter((curElm)=>{
            return curElm.category === category;
        })
        setRad(newList);
    }
    return(<div>
        <NavBar filterData = {filterData}/>
        <AgentsCards rad={rad} />
    </div>);
}

export default Agents;
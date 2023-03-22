import React,{useState} from "react";
import "./Agents.css"
import Radianites from "./RadianitesApi";
import AgentsCards from "./AgentsCard";
import NavBar from "./NavBar";


const uniqueList = [ ...new Set(
    Radianites.map((curElm)=>{
        return curElm.category;
    })
)]

const Agents = () =>{

    const [rad, setRad] = useState(Radianites);
    const [list, setList] = useState(uniqueList);
    const filterData = (category) =>{
        const newList = Radianites.filter((curElm)=>{
            return curElm.category === category;
        })
        setRad(newList);
    }
    return(<div>
        <NavBar filterData = {filterData} list={list}/>
        <AgentsCards rad={rad} />
    </div>);
}

export default Agents;
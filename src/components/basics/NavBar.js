import React from "react";

const NavBar = ({ filterData }) => {
    return(<div>
        <div className="nav-bar">
            <div className="btn-container">
                <button className="btn" onClick={()=>{filterData("Duelist")}}>Duelists</button>
                <button className="btn" onClick={()=>{filterData("Controller")}}>Controllers</button>
                <button className="btn" onClick={()=>{filterData("Sentinels")}}>Sentinels</button>
                <button className="btn" onClick={()=>{filterData("Initiators")}}>Initiators</button>
                <button className="btn">Maps</button>
            </div>
        </div>
    </div>)
}

export default NavBar;
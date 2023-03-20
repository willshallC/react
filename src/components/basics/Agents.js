import React from "react";
import "./Agents.css"
const Agents = () =>{
    return(<div>
        <section className="agents-section">
            <div className="agents-container">
                <div className="agents-info-container">
                    <div className="agents-no">1</div>
                    <h3 className="agents-category">Duelist</h3>
                </div>
                <h1 className="agents-name">Jett</h1>
                <div className="agents-img">
                    <img src="./images/jett.jpg" alt="agent"/>
                </div>
            </div>
        </section>
    </div>);
}

export default Agents;
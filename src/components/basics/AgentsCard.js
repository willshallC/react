import React from "react";

const AgentsCards = () =>{
    return(
        <div>
            <section className="agents-section">
            <div className="agents-container">
                <div className="agents-info-container">
                    <div className="agents-no">1</div>
                    <h3 className="agents-category"><img className="agents-logo" src="./images/duelist.png"/> Duelist</h3>
                </div>
                <h1 className="agents-name">Jett</h1>
                <p className="agents-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                <div className="agents-img">
                    <img src="./images/jett.jpg" alt="agent"/>
                </div>
            </div>
        </section>
        </div>
    )
}

export default AgentsCards;
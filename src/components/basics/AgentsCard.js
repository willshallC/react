import React from "react";

const AgentsCards = ({rad}) =>{

    console.log("dsdasd"+rad);
    return(
        <div>
            <section className="agents-section">
                {
                    rad.map((curData)=>{
                        return (
                            
                            <div className="agents-container">
                                <div className="agents-info-container">
                                    <div className="agents-no">{curData.id}</div>
                                    <h3 className="agents-category"><img className="agents-logo" src={curData.icon}/> {curData.category}</h3>
                                </div>
                                <h1 className="agents-name">{curData.name}</h1>
                                <p className="agents-description">{curData.description}</p>
                                <div className="agents-img">
                                    <img src={curData.image} alt="agent"/>
                                </div>
                            </div>
                            
                        );
                    })
                }
            </section>
        </div>
    )
}

export default AgentsCards;
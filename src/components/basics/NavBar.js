import React from "react";

const NavBar = ({ filterData, list }) => {
    return(<div>
        <div className="nav-bar">
            <div className="btn-container">

                {
                    list.map((curData)=>{
                        console.log(curData);
                        return(
                            <button className="btn" onClick={()=>{filterData(curData)}}>{curData}</button>
                            
                        )
                    })
                }
            </div>
        </div>
    </div>)
}

export default NavBar;
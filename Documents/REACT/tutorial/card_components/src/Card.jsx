import React from "react";
import ProfilePic from './assets/Mine.jpeg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={ProfilePic} alt="Profile Picture"/>
            <h2 className="card-title">ERNESTO AGENCY</h2>
            <p className="card-text">I create softwares and love coding</p>
        </div>
    )
}
export default Card
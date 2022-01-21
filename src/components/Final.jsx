import React from "react";
import { Link } from "react-router-dom";
import "../animations.css"

function Final() {
    return (
        <div className="final">
            <p style={{paddingTop:"30vh"}}> this is test text</p>
            <Link to="/projects/weektest">
                <h1> TEST WEEK </h1>
            </Link>
            {/* 
            <div class="downArrow">
                <div class="arrow-right" />
                <div class="arrow-left" />
            </div>
            */}
        </div>
    );
}

export default Final;
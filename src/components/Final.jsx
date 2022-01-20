import React from "react";
import { Link } from "react-router-dom";

function Final() {
    return (
        <div className="final">
            <p style={{paddingTop:"30vh"}}> this is test text</p>
            <Link to="/projects/weektest">
                <h1> TEST WEEK </h1>
            </Link>
        </div>
    );
}

export default Final;
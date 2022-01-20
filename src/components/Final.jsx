import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Final() {
    return (
        <div className="final">
            <p style={{paddingTop:"30vh"}}> this is test text</p>
            <Link to="/Projects/WeekTest">
                <h1> TEST WEEK </h1>
            </Link>
        </div>
    );
}

export default Final;
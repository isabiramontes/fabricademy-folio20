import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";

function WeekTest() {

    return (
        <div>
            <Container >
                <h1 className="boldHeader" style={{ color: "black" }}> Digital Bodies </h1>
                <h1> Week Test</h1>
                <p>
                    THIS IS A TEST WEEK TALKING
                </p>
                <p>
                    testing
                </p>
                <p>
                    1, 2, 3
                </p>
            </Container>
        </div>
    );
}

export default WeekTest;
import React, { useEffect } from "react";
import { useParams } from "react-router";
import "../App.css"
import "../weeks.css"
import { Container } from "react-bootstrap";

function WeekTwo() {
    let { weekSlug } = useParams();

    useEffect(() => {
        // Fetch week using the weekSlug
    }, [weekSlug]);

    return (
        <div>
            <Container >
                <h1 className="boldHeader" style={{color:"black"}}> Digital Bodies </h1>
                <h1 className="mt-5"> Week 2</h1>
                <h6 className="mb-5">The post slug is, {weekSlug}</h6>
                <p>
                   THIS IS WEEK two talking
                </p>
                <p>
                    WEEK TWO
                </p>
                <p>
                    DOS
                </p>
            </Container>
        </div>
    );
}

export default WeekTwo;
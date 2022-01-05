import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../weeks.css"

function Weeks() {
    return (
        <div className="weeks" style={{ paddingTop: "4vh" }}>
            <Container style={{ marginLeft: "0", marginRight: "0", overflow: "hidden"}} >
                <Row className="menuRow" style={{ paddingTop: "10vh", paddingBottom: "10vh"}}>
                    <Col sm={2} lg={2}>
                        <h1 style={{ fontSize: "13vh", textAlign: "center", verticalAlign: "middle"}}> 01 </h1>
                    </Col>
                    <Col sm={4} lg={4}>
                        <div className="text-center" style={{ width: "80%", height: "26vh", backgroundColor: "black"}}> </div>
                    </Col>
                    <Col sm={6} lg={6} className="weekText">
                        <Link to="/Projects/WeekOne">
                            <h1 className="boldHeader"> state of the art, project management & documentation </h1>
                            <p> 
                                This week I worked on start to brainstorm for my final project and learning/adjusting to the documentation process.
                            </p>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Weeks;


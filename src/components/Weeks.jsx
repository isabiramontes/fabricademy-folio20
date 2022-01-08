import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../weeks.css"

function Weeks() {
    return (
        <div className="weeks">
            <div className="parallax" style={{ height: "50vh", width: "100vw" }}>
                <Container style={{ marginLeft: "0", marginRight: "0", paddingTop: "6vh", }}>
                    <Row className="menuRow">
                        <Col sm={2} md={2} lg={2} className="weekCol">
                            <h1 className="weekNum"> 01 </h1>
                        </Col>
                        <Col sm={4} md={4} lg={4} className="imgCol">
                            <div className="imgBox" />
                        </Col>
                        <Col sm={5} md={5} lg={5} className="weekInfoCol">
                            <Link to="/Projects/WeekOne">
                                <h1 className="weekName">state of the art, project management & documentation</h1>
                                <p className="defaultTextBody">This week I worked on start to brainstorm for my final project and learning/adjusting to the documentation process.</p>
                            </Link>
                        </Col>
                        <Col sm={1} md={1} lg={1} className="arrowCol">
                            <h1 className="weekNum"> k </h1>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        </div>
    );
}

export default Weeks;


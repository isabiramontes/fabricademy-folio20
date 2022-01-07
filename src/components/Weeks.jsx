import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../weeks.css"

function Weeks() {
    return (
        <div className="weeks" style={{ paddingTop: "4vh" }}>
            <Container style={{ marginLeft: "0", marginRight: "0", overflow: "hidden"}} >
                <Row className="menuRow">
                    <Col xs md lg="2" className="weekNum">
                        <h1> 01 </h1>
                    </Col>
                    <Col xs md lg="4" >
                        <div className="imgHolder"> </div>
                    </Col>
                    
                    <Col xs md lg="6"className="weekText">
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


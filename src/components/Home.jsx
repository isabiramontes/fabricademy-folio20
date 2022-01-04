import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
    return (
        <div className="home">
            <div className="scrollContent" style={{ width: "100vw", overflow: "hidden" }}>
                <div className="parallax" id="introSection">
                    <h1 className="fullName"> Isa
                        <span id="twentyText" style={{ fontSize: "15px" }}>2020</span>
                        <span className="boldHeader" style={{ display: "block", paddingTop: "12vw" }}> Biramontes </span>
                    </h1>
                    <div id="home_pic"> </div>
                </div>
                <div className="parallax" id="aboutSection" style={{ width: "100vw", overflow: "hidden" }}>
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col className="ddaText"> 
                                <h1 className="boldHeader"> Developer,
                                    <span style={{ display: "block" }}>Designer,</span>
                                    <span style={{ display: "block" }}> Artist. </span>
                                </h1>
                            </Col>
                        </Row>
                    </Container>
                </div>    
            </div>  
        </div>
    );
}

export default Home;
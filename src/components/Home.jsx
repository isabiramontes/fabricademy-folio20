import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
    return (
        <div className="home">
            <div className="scrollContent" style={{ width: "100vw", overflow: "hidden" }}>
                <div className="parallax" id="introSection">
                    <h1 className="fullName"> ISA
                        <span id="twentyText" style={{ fontSize: "15px" }}>2020</span>
                        <span className="boldHeader" style={{ display: "block", paddingTop: "12vw" }}> Biramontes </span>
                    </h1>
                    <div id="home_pic"> </div>
                </div>
                <div className="parallax" id="aboutSection" style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
                    <Container>
                        <Row style={{ paddingTop: "20vh" }}>
                            <Col sm={4} lg={4}>
                                <div className="aboutText">
                                    <h1 className="bodyText" style={{ fontSize: "3.5vh", fontWeight: "bold" }}> Lorem ipsum</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Dolor magna eget est lorem. Convallis posuere morbi leo urna. In mollis nunc sed id semper risus in. Congue eu consequat ac felis donec et odio. Purus faucibus ornare suspendisse sed nisi. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. </p>
                                </div>
                            </Col>
                            <Col sm={8} lg={8}>
                                <div className="ddaText">
                                    <h1 className="boldHeader"> Developer,
                                        <span style={{ display: "block" }}>Designer,</span>
                                        <span style={{ display: "block" }}>Artist. </span>
                                    </h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* 
                <div className="parallax" id="navSection" style={{ height: "100vh" }}>
                    <h1> test </h1>
                </div> 
                */}      
            </div>  
        </div>
    );
}

export default Home;
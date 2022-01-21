import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../weeks.css"
import "../animations.css"

function Weeks() {
    return (
        <div className="weeks">
            <div className="parallax">
                <Container style={{ marginLeft: "0", marginRight: "0"}}>
                    <Row className="menuRow">
                        <Col sm={2} md={2} lg={2} className="weekCol">
                            <h1 className="weekNum"> 01 </h1>
                        </Col>
                        <Col sm={3} md={3} lg={3} className="imgCol">
                            <div className="imgBox" />
                        </Col>
                        <Col sm={6} md={6} lg={6} className="weekInfoCol">
                            <Link to="/projects/weekone" className="customLinkCSS">
                                <h1 className="weekName">state of the art, project management & documentation</h1>
                            </Link>
                            <p className="defaultTextBody" >Brainstorming for my final project and learning/adjusting to the documentation process.</p>
                        </Col>
                        <Col sm={1} md={1} lg={1} className="arrowCol">
                            <Link to="/projects/weekone">
                                <div class="arrow">
                                    <div class="arrow-top" />
                                    <div class="arrow-bottom" />
                                </div>
                            </Link> 
                        </Col>
                    </Row>
                    <Row className="menuRow" >
                        <Col sm={2} md={2} lg={2} className="weekCol">
                            <h1 className="weekNum"> 02 </h1>
                        </Col>
                        <Col sm={3} md={3} lg={3} className="imgCol">
                            <div className="imgBox" />
                        </Col>
                        <Col sm={6} md={6} lg={6} className="weekInfoCol">
                            <Link to="/projects/weektwo" className="customLinkCSS">
                                <h1 className="weekName">Digital Bodies</h1>
                            </Link>
                            <p className="defaultTextBody" >Learning how to create 3D models using MakeHuman / Rhinoceros and translating these into physical models using Slicer for Fusion 360.</p>
                        </Col>
                        <Col sm={1} md={1} lg={1} className="arrowCol">
                            <Link to="/projects/weektwo">
                                <div class="arrow">
                                    <div class="arrow-top"></div>
                                    <div class="arrow-bottom"></div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="menuRow">
                        <Col sm={2} md={2} lg={2} className="weekCol">
                            <h1 className="weekNum"> 03 </h1>
                        </Col>
                        <Col sm={3} md={3} lg={3} className="imgCol">
                            <div className="imgBox" />
                        </Col>
                        <Col sm={6} md={6} lg={6} className="weekInfoCol">
                            <Link to="/projects/weekthree" className="customLinkCSS">
                                <h1 className="weekName">Circular fashion</h1>
                            </Link>
                            <p className="defaultTextBody">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                        </Col>
                        <Col sm={1} md={1} lg={1} className="arrowCol">
                            <Link to="/projects/weekthree">
                                <div class="arrow">
                                    <div class="arrow-top"></div>
                                    <div class="arrow-bottom"></div>
                                </div>
                            </Link>
                        </Col>
                    </Row> 
                </Container>
            </div>
            <div className="parallax" style={{paddingTop:"6vh"}}>
                <Container style={{ marginLeft: "0", marginRight: "0" }}>
                    <Row className="menuRow">
                        <Col sm={2} md={2} lg={2} className="weekCol">
                            <h1 className="weekNum"> 04 </h1>
                        </Col>
                        <Col sm={3} md={3} lg={3} className="imgCol">
                            <div className="imgBox" />
                        </Col>
                        <Col sm={6} md={6} lg={6} className="weekInfoCol">
                            <Link to="/projects/weekfour" className="customLinkCSS">
                                <h1 className="weekName">biochromes</h1>
                            </Link>
                            <p className="defaultTextBody" >Learning about Biochromes, a more natural sustainable approach to pigments and textile dying, to develop a natural dye and ink of my own.</p>
                        </Col>
                        <Col sm={1} md={1} lg={1} className="arrowCol">
                            <Link to="/projects/weekfour">
                                <div class="arrow">
                                    <div class="arrow-top"></div>
                                    <div class="arrow-bottom"></div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="menuRow" >
                        <Col sm={2} md={2} lg={2} className="weekCol">
                            <h1 className="weekNum"> 05 </h1>
                        </Col>
                        <Col sm={3} md={3} lg={3} className="imgCol">
                            <div className="imgBox" />
                        </Col>
                        <Col sm={6} md={6} lg={6} className="weekInfoCol">
                            <Link to="/projects/weekfive" className="customLinkCSS">
                                <h1 className="weekName">E-textiles</h1>
                            </Link>
                            <p className="defaultTextBody">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                        </Col>
                        <Col sm={1} md={1} lg={1} className="arrowCol">
                            <Link to="/projects/weekfive">
                                <div class="arrow">
                                    <div class="arrow-top"></div>
                                    <div class="arrow-bottom"></div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="menuRow">
                        <Col sm={2} md={2} lg={2} className="weekCol">
                            <h1 className="weekNum"> 06 </h1>
                        </Col>
                        <Col sm={3} md={3} lg={3} className="imgCol">
                            <div className="imgBox" />
                        </Col>
                        <Col sm={6} md={6} lg={6} className="weekInfoCol">
                            <Link to="/projects/weeksix" className="customLinkCSS">
                                <h1 className="weekName">BioFabricating Materials</h1>
                            </Link>
                            <p className="defaultTextBody"> Exploring available technology to develop bio-based materials as an alternative to current, less sustainable options. </p>
                        </Col>
                        <Col sm={1} md={1} lg={1} className="arrowCol">
                            <Link to="/projects/weeksix">
                                <div class="arrow">
                                    <div class="arrow-top"></div>
                                    <div class="arrow-bottom"></div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="parallax" style={{ paddingTop: "6vh" }}>
                <Container style={{ marginLeft: "0", marginRight: "0" }}>
                    <Row className="menuRow">
                        <Col sm={2} md={2} lg={2} className="weekCol">
                            <h1 className="weekNum"> 07 </h1>
                        </Col>
                        <Col sm={3} md={3} lg={3} className="imgCol">
                            <div className="imgBox" />
                        </Col>
                        <Col sm={6} md={6} lg={6} className="weekInfoCol">
                            <Link to="/projects/weekseven" className="customLinkCSS">
                                <h1 className="weekName">Computational Couture</h1>
                            </Link>
                            <p className="defaultTextBody">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                        </Col>
                        <Col sm={1} md={1} lg={1} className="arrowCol">
                            <Link to="/projects/weekseven">
                                <div class="arrow">
                                    <div class="arrow-top"></div>
                                    <div class="arrow-bottom"></div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="menuRow" >
                        <Col sm={2} md={2} lg={2} className="weekCol">
                            <h1 className="weekNum"> 08 </h1>
                        </Col>
                        <Col sm={3} md={3} lg={3} className="imgCol">
                            <div className="imgBox" />
                        </Col>
                        <Col sm={6} md={6} lg={6} className="weekInfoCol">
                            <Link to="/projects/weekeight" className="customLinkCSS">
                                <h1 className="weekName">Open Source Hardware - From Fibers to Fabric</h1>
                            </Link>
                            <div className="defaultTextBody">
                                
                            </div>
                            <p className="groupProject"> For our first and only fully collaborative week, myself, <a href="https://class.textile-academy.org/2021/noemie.carrier/" target="_blank" rel="noreferrer"><span>Noémie Carrier</span></a>, <a href="https://class.textile-academy.org/2021/annie.ferlatte/" target="_blank" rel="noreferrer"><span>Annie Ferlatte</span></a>, and <a href="https://class.textile-academy.org/2021/francois.auclair/" target="_blank" rel="noreferrer"><span>François Auclair</span></a> built our own automated loom. </p>
                        </Col>
                        <Col sm={1} md={1} lg={1} className="arrowCol">
                            <Link to="/projects/weekeight">
                                <div class="arrow">
                                    <div class="arrow-top"></div>
                                    <div class="arrow-bottom"></div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="menuRow">
                        <Col sm={2} md={2} lg={2} className="weekCol">
                            <h1 className="weekNum"> 09 </h1>
                        </Col>
                        <Col sm={3} md={3} lg={3} className="imgCol">
                            <div className="imgBox" />
                        </Col>
                        <Col sm={6} md={6} lg={6} className="weekInfoCol">
                            <Link to="/projects/weeknine" className="customLinkCSS">
                                <h1 className="weekName">Textile as scaffold</h1>
                            </Link>
                            <p className="defaultTextBody">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                        </Col>
                        <Col sm={1} md={1} lg={1} className="arrowCol">
                            <Link to="/projects/weeknine">
                                <div class="arrow">
                                    <div class="arrow-top"></div>
                                    <div class="arrow-bottom"></div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="parallax" style={{ paddingTop: "6vh" }}>
                <Container style={{ marginLeft: "0", marginRight: "0" }}>
                    <Row className="menuRow">
                        <Col sm={2} md={2} lg={2} className="weekCol">
                            <h1 className="weekNum"> 10 </h1>
                        </Col>
                        <Col sm={3} md={3} lg={3} className="imgCol">
                            <div className="imgBox" />
                        </Col>
                        <Col sm={6} md={6} lg={6} className="weekInfoCol">
                            <Link to="/projects/weekten" className="customLinkCSS">
                                <h1 className="weekName">Wearables</h1>
                            </Link>
                            <p className="defaultTextBody">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                        </Col>
                        <Col sm={1} md={1} lg={1} className="arrowCol">
                            <Link to="/projects/weekten">
                                <div class="arrow">
                                    <div class="arrow-top"></div>
                                    <div class="arrow-bottom"></div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="menuRow" >
                        <Col sm={2} md={2} lg={2} className="weekCol">
                            <h1 className="weekNum"> 11 </h1>
                        </Col>
                        <Col sm={3} md={3} lg={3} className="imgCol">
                            <div className="imgBox" />
                        </Col>
                        <Col sm={6} md={6} lg={6} className="weekInfoCol">
                            <Link to="/projects/weekeleven" className="customLinkCSS">
                                <h1 className="weekName">Implications and applications</h1>
                            </Link>
                            <p className="defaultTextBody">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                        </Col>
                        <Col sm={1} md={1} lg={1} className="arrowCol">
                            <Link to="/projects/weekeleven">
                                <div class="arrow">
                                    <div class="arrow-top"></div>
                                    <div class="arrow-bottom"></div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="menuRow">
                        <Col sm={2} md={2} lg={2} className="weekCol">
                            <h1 className="weekNum"> 12 </h1>
                        </Col>
                        <Col sm={3} md={3} lg={3} className="imgCol">
                            <div className="imgBox" />
                        </Col>
                        <Col sm={6} md={6} lg={6} className="weekInfoCol">
                            <Link to="/projects/weektwelve" className="customLinkCSS">
                                <h1 className="weekName">Soft robotics</h1>
                            </Link>
                            <p className="defaultTextBody">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                        </Col>
                        <Col sm={1} md={1} lg={1} className="arrowCol">
                            <Link to="/projects/weektwelve">
                                <div class="arrow">
                                    <div class="arrow-top"></div>
                                    <div class="arrow-bottom"></div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="parallax" style={{ paddingTop: "6vh" }}>
                <Container style={{ marginLeft: "0", marginRight: "0" }}>
                    <Row className="menuRow">
                        <Col sm={2} md={2} lg={2} className="weekCol">
                            <h1 className="weekNum"> 13 </h1>
                        </Col>
                        <Col sm={3} md={3} lg={3} className="imgCol">
                            <div className="imgBox" />
                        </Col>
                        <Col sm={6} md={6} lg={6} className="weekInfoCol">
                            <Link to="/projects/weekthirteen" className="customLinkCSS">
                                <h1 className="weekName">Skin Electronics</h1>
                            </Link>
                            <p className="defaultTextBody">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                        </Col>
                        <Col sm={1} md={1} lg={1} className="arrowCol">
                            <Link to="/projects/weekthirteen">
                                <div class="arrow">
                                    <div class="arrow-top"></div>
                                    <div class="arrow-bottom"></div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="finalProjectRow">
                        <Col sm={12} md={12} lg={12} className="finalProjectContent">
                            <Link to="final" className="customLinkCSS">
                                <h1 className="finalProjectText">Final Project</h1>
                            </Link>
                            <p className="finalProjectDesp">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Weeks;


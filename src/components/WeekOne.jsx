import React, { useEffect } from "react";
import { useParams } from "react-router";
import "../App.css"
import "../weeks.css"
import { Container, Row, Col} from "react-bootstrap";

function WeekOne() {
    let { weekSlug } = useParams();

    useEffect(() => {
        // Fetch week using the weekSlug
    }, [weekSlug]);

    return (
        <div className="home">
            <div className="scrollContent" style={{ width: "100vw", overflow: "hidden" }}>
                <div className="parallax" style={{ backgroundColor:"#e9c149", paddingTop: "18vh"}}>
                    <Container>
                        <h1 className="weekNameandweekNum"> State of the art, project management & documentation </h1>
                        <h1 className="weekIdentity"> Week 1</h1>
                        <p className="weekHookText">This week I worked on start to brainstorm for my final project and learning/adjusting to the documentation process. {weekSlug}</p>
                    </Container>
                </div>
                <div className="parallax" style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
                    <Container>
                        <Row style={{ paddingTop: "20vh" }}>
                            <Col sm={7} md={7} lg={7}>
                                <h1> Developer,
                                    <span style={{ display: "block" }}>Designer,</span>
                                    <span style={{ display: "block" }}>Artist. </span>
                                </h1>
                            </Col>
                            <Col sm={5} md={5} lg={5}>
                                <div>
                                    <h1 className="bodyText" style={{ fontSize: "1.7em", fontWeight: "bold", textAlign: "right" }}>Lorem ipsum</h1>
                                    <p className="defaultTextBody" style={{ paddingLeft: "10%", textAlign:"right" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu turpis egestas pretium aenean. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Dolor magna eget est lorem. Convallis posuere morbi leo urna. In mollis nunc sed id semper risus in. Congue eu consequat ac felis donec et odio. Purus faucibus ornare suspendisse sed nisi. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim.  </p>
                                </div>
                            </Col>
                            
                        </Row>
                        </Container>
                </div>
            </div>  
        </div>
    );
}

export default WeekOne;

import React from "react";
import { Container } from "react-bootstrap";
import "../App.css"

function Home() {
    return (
        <div className="home">
            <p>test</p>
            <div className="scrollContent">
                <div className="parallax" id="introSection">
                    <h1 className="fullName"> Isa
                        <span id="twentyText" style="font-size: 15px;">2020</span>
                        <span className="boldHeader" style="display: block; padding-top: 12vw;"> Biramontes </span>
                    </h1>
                    <div id="home_pic"> </div>
                </div>
                <div className="parallax" id="aboutSection">
                    <div className="ddaText">
                        <h1 className="boldHeader"> Developer,
                            <span style="display: block;">Designer,</span>
                            <span style="display: block;"> Artist. </span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
    return (
        <div className="projects">
            <Container>
                <Outlet />

            </Container>
        </div>
    );
}

export default Projects;
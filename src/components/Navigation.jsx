import React from "react";
import { Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css"

function Navigation() {
    return (
        <div className="navigation">
            <Container>
                <Nav className="d-flex justify-content-between" activeKey="/home">
                    <Nav.Item>
                        <NavLink className="nav-link" to="/home"> Home </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/assignments"> Assignments </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/final"> Final </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/about"> About </NavLink>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    );
}

export default Navigation;
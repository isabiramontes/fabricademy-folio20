import React from "react";
import { Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css"

function Navigation() {
    return (
        <div className="navigation">
            <Container>
                <Nav className="d-flex justify-content-between" activeKey="/home" sticky="top">
                    <Nav.Item>
                        <NavLink className="nav-link" to="/home" style={{ color: "#1c1c21" }}> Home </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/assignments" style={{ color: "#1c1c21" }}> Assignments </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/final" style={{ color: "#1c1c21" }}> Final </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/about" style={{ color: "#1c1c21" }}> About </NavLink>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    );
}

export default Navigation;
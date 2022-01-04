import React from "react";
import { Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css"

function Navigation() {
    return (
        <div className="navigation" style={{ width: "100vw" }}>
            <Container className="navContainer">
                <Nav className="d-flex justify-content-between" activeKey="/home">
                    <Nav.Item>
                        <NavLink className="nav-link" to="/home" style={{ color: "#1c1c21" }}> HOME </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/assignments" style={{ color: "#1c1c21" }}> ASSIGNMENTS </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/final" style={{ color: "#1c1c21" }}> FINAL </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className="nav-link" to="/home#aboutSection" style={{ color: "#1c1c21" }}> ABOUT </NavLink>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>
    );
}

export default Navigation;
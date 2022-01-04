import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
            <Navbar fixed="top">
                <Container style={{ display: "flex" }}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <NavLink className="nav-link" to="/home" style={{ justifyContent: "flexStart" }}> Home </NavLink>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Container style={{ justifyContent: "center" }}>
                            <NavLink className="nav-link" to="/assignments"> Assignments </NavLink>
                            <NavLink className="nav-link" to="/final"> Final </NavLink>
                        </Container>
                        <NavLink className="nav-link" to="/about" style={{ justifyContent: "flexEnd" }}> About </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;
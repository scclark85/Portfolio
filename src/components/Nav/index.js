import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "./nav.css"

class FullNav extends Component {
    render() {
        return (
            <div className="container">

                <Navbar id="page-nav" collapseOnSelect expand="lg">
                    <Navbar.Brand href="/">
                        <img
                            className="nav_logo"
                            src="/images/Logo Transparent.png"
                            alt="nav_logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav id="navbar-link">
                            <Nav.Link href="/about"><b>ABOUT</b></Nav.Link>
                            <Nav.Link href="/work"><b>PORTFOLIO</b></Nav.Link>
                            <Nav.Link href="/resume"><b>RESUME</b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default FullNav
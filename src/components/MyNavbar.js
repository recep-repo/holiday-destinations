import React from 'react'
import {Navbar, Container, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import logo from '../image/logo.png'

const MyNavbar = () => {
    const navigate = useNavigate()
    return (
        <Navbar style={{backgroundColor:"#003580"}} expand="lg" onSelect={(eventKey) => eventKey === "home" ? navigate("/") : navigate(`/${eventKey}`)}>
            <Container>
                <Navbar.Brand href="#home">
                    <Nav.Link eventKey="home">
                        <img src={logo} alt="" />
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link style={{color:"white"}} eventKey="home">Home</Nav.Link>
                        <Nav.Link style={{color:"white"}} eventKey="about">About</Nav.Link>
                        <Nav.Link style={{color:"white"}} eventKey="contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar

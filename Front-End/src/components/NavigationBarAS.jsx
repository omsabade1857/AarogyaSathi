import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import React from 'react';
import './NavigationBar.css';
import { isAuthenticated } from "../services/TokenUtil";



export function NavigationBar() {
    const navigate = useNavigate();
    function signOut(){
        localStorage.removeItem("token");
        navigate("/signin");
    }

    return (
        
        <Navbar className="bar" expand="lg" >
            <Container >
            <Link className="navbar-brand mt-0" to="/">
             <img
                src="HMS1.png"
                alt=""
                style={{ height: "50px", width: "70px"}}
            />
            </Link>
            <span className="fs-2 text-warning">Arogya sathi</span>
                {/* <Link to="/">
                    <Navbar.Brand className="textcolor">Calm Connect</Navbar.Brand>
                </Link> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"  style={{ fontSize: "20px"}}>
                    {isAuthenticated() ?<>
                        <LinkContainer to="/myprofile">
                            <Nav.Link className="textcolor">My Profile</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/book-appointment">
                            <Nav.Link className="textcolor">Book An Appointment</Nav.Link>
                        </LinkContainer></>:''}
                        <LinkContainer to="/about">
                            <Nav.Link className="textcolor">About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link className="textcolor">Contact Us</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav className="right" style={{ fontSize: "20px"}}>
                        {isAuthenticated() ?
                            <Button variant="light" onClick={signOut}>
                            Sign Out
                            </Button> :
                            <>

                                <LinkContainer to="/signin">
                                    <Nav.Link className="textcolor">Sign In </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/signup">
                                    <Nav.Link className="textcolor">Sign Up</Nav.Link>
                                </LinkContainer>
                            </>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
import React from 'react';
import { Carousel, Container, Col, Row, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Navigate, useNavigate } from "react-router-dom";
import './CalmConnect.css';
import Accordion from 'react-bootstrap/Accordion';

export function CalmConnect() {
    const navigate = useNavigate();
    function dctrLogin(){
        navigate("/dctrsignin");
    }
    function adminLogin(){
        navigate("/adminsignin");
    }
    const currentYear = new Date().getFullYear();
    return (
        <>
            <Container fluid className="crouselstyle container-no-padding">
                <Col lg={12} >
                    <Carousel >
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1526724038726-3007ffb8025f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1524901548305-08eeddc35080?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1505455184862-554165e5f6ba?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Container>
            <Container className="card-container">
            <Row className="justify-content-around">
            <Col md={4}>      
            <Card className="card">
                        <Card.Img variant="top" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL2pvYjE1MzdkZXNpZ24tYmFja2dyb3VuZC0wM2EtYy5qcGc.jpg" />
                        <Card.Body>
                            <Card.Title>Nelson Mandela</Card.Title>
                            <Card.Text className="card-text">
                            "The greatest glory in living lies not in never falling, but in rising every time we fall."
                            </Card.Text>
                            <Button onClick={dctrLogin}>Login</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="card">
                        <Card.Img variant="top"  src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s1ODc5MTA3NC13aWtpbWVkaWEtaW1hZ2Uta293YXdlZHUuanBn.jpg" />
                        <Card.Body>
                            <Card.Title>J.K. Rowling</Card.Title>
                            <Card.Text className="card-text">
                            "Happiness can be found even in the darkest of times if one only remembers to turn on the light."{' '}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="card">
                        <Card.Img variant="top" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtODgtMzI1LWt3YW4tNGIuanBn.jpg" />
                        <Card.Body>
                            <Card.Title>Unknown</Card.Title>
                            <Card.Text className="card-text">
                            "You are allowed to take up space. You are allowed to have a voice. You are allowed to seek help."
                            </Card.Text>
                            <Button onClick={adminLogin}>Login</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    </Row>
                    <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>FAQ 1: What is the difference between a psychiatrist and a psychologist?</Accordion.Header>
                        <Accordion.Body>
                        Psychiatrists are medical doctors who specialize in mental health and can prescribe medication. They often treat mental health conditions with a combination of medication and therapy. Psychologists, on the other hand, are trained in psychology and provide therapy or counseling to help individuals cope with mental health issues using various talk therapies and behavioral interventions.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>FAQ 2: How do I know if I need therapy?</Accordion.Header>
                        <Accordion.Body>
                        There's no strict rule for when therapy is needed, but some signs might indicate it could be beneficial. Persistent feelings of sadness, anxiety, difficulty coping with daily life, relationship issues, major life changes, or trauma can all be reasons to seek therapy. If these feelings or experiences interfere with your ability to function or enjoy life, therapy can offer support and strategies to navigate these challenges.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>FAQ 3: What are some self-care practices for mental health?</Accordion.Header>
                        <Accordion.Body>
                        Self-care involves activities that promote well-being and reduce stress. These can include regular exercise, mindfulness or meditation, maintaining a healthy diet, getting enough sleep, engaging in hobbies or activities you enjoy, setting boundaries, seeking social support, and practicing relaxation techniques like deep breathing or progressive muscle relaxation.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>FAQ 4: Can mental health conditions be cured?</Accordion.Header>
                        <Accordion.Body>
                        Mental health conditions are often manageable with treatment, but "cure" might not be the right term. Recovery looks different for everyone and might involve a combination of therapy, medication, lifestyle changes, and support networks. Some individuals may experience periods of remission or improvement where symptoms are less severe or absent, while others may learn to manage their condition effectively to lead fulfilling lives.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
            </Container>
        </>
    );
}
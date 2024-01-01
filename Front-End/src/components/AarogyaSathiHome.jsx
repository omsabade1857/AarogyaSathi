import React from 'react';
import { Carousel, Container, Col, Row, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Navigate, useNavigate } from "react-router-dom";
import './CalmConnect.css';
//import Accordion from 'react-bootstrap/Accordion';

export function AarogyaSathiHome() {
    const navigate = useNavigate();
    function dctrLogin() {
        navigate("/dctrsignin");
    }
    function adminLogin() {
        navigate("/adminsignin");
    }
    function patientLogin() {
        navigate("/signin");
    }
    function patientSignUp() {
        navigate("/signup");
    }
    const currentYear = new Date().getFullYear();
    return (
        <>
            <Container fluid className="container-fluid mt-4" >
                <Col lg={12} >
                    <Carousel >
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src="https://www.aimprosoft.com/wp-content/uploads/2020/06/How-to-Create-a-Hospital-Management-Software.png"
                                alt="First slide"
                                height={600}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://acropolium.com/img/articles/hospital-management-software/img01.jpg"
                                alt="Second slide"
                                height={600}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://miro.medium.com/v2/resize:fit:1200/1*A4Q1kK-pEP61zC6ErDwplg.jpeg"
                                alt="Third slide"
                                height={600}
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Container>

            <Container className="mt-5 mb-5">

                <div className="bg-light text-dark px-4 py-0 text-center">
                    <div className="py-5">
                        <div className="row">
                            <div className="col-3" />
                            <div className="col-1">
                                <img src="sahaas triangle.png" alt="" />
                            </div>
                            <div className="col-5">
                                <h2 className="display-6 fw-medium text-success">
                                    Health is Wealth!
                                </h2>
                            </div>
                            <div className="col-3" />
                        </div>
                        <div className="col-lg-6 mx-auto">
                            <p className="fs-5 mb-1 mt-4">
                                Wellness can be defined as the act of practicing healthy habits in all areas of your life,
                                including health, fitness, mindfulness, mental health and social well-being.
                            </p>
                        </div>
                    </div>
                </div>
        </Container >

            <Container >
                <Row >
                    <Col lg={4}>
                        <Card className="card">
                            <Card.Img src="https://static.vecteezy.com/system/resources/previews/005/015/246/original/doctor-icon-in-trendy-long-shadow-style-isolated-on-soft-blue-background-free-vector.jpg" />
                            <Card.Body className='text-center'>
                                <Card.Title>Doctor</Card.Title>
                                {/* <Card.Text className="card-text">
                            {/* "The greatest glory in living lies not in never falling, but in rising every time we fall." */}
                                {/* </Card.Text> */}
                                <Button onClick={dctrLogin} className='mt-4'>Login</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="card">
                            <Card.Img variant="top" src="https://media.istockphoto.com/id/1097493802/vector/patient-icon-customer-icon-with-add-additional-sign-patient-icon-and-new-plus-positive.jpg?s=612x612&w=0&k=20&c=IrugHP6i-oobykGTLg7kCHP-SPENaDFxhQKAIdM9XuI=" />
                            <Card.Body className='text-center'>
                                <Card.Title>Patient</Card.Title>
                                {/* <Card.Text className="card-text">
                            "Happiness can be found even in the darkest of times if one only remembers to turn on the light."{' '}
                            </Card.Text> */}
                                <Row>
                                    <Col lg={2}></Col>
                                    <Col lg={4} ><Button onClick={patientLogin} className='mt-4'>Login</Button></Col>

                                    <Col lg={4} > <Button onClick={patientSignUp} className='mt-4'>SignUp</Button></Col>
                                    <Col lg={2}></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="card">
                            <Card.Img variant="top" src="https://i.pngimg.me/thumb/f/720/comvecteezy287717.jpg" className='mt-4' height={330} />
                            <Card.Body className='text-center'>
                                <Card.Title>Admin</Card.Title>
                                {/* <Card.Text className="card-text">
                            "You are allowed to take up space. You are allowed to have a voice. You are allowed to seek help."
                            </Card.Text> */}
                                <Button onClick={adminLogin} className='mt-4'>Login</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </>

                /* <Accordion>
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
                    </Accordion> */
            
            
    );
}
import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../services/UserServices.js";

export function Signin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loginError, setLoginError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await login(formData);
            console.log(result);
            //localStorage.setItem("token", result.token);
            if(result.status) {
                sessionStorage.setItem('patientId', result.id);
              
                navigate("/myprofile");
               
            }
            else {

              
                if(result.message=="Invalid Email/Password"){
                    console.log(result);
                    setLoginError(true);
                }
            }
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    }
    return (
        <Container style={{ height:455 , marginTop:40}} md={{ span: 3, offset: 5 }} >
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} required/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    {loginError ? <Alert variant="danger" className="mt-3">Invalid email or password</Alert> : null}
                </Col><br /><br />
                <Col md={{ span: 4, offset: 4 }}>

                    <p>Not a registered member yet?</p>

                    <Link to="/signup">Click Here to Sign Up</Link>
                </Col>
            </Row>
        </Container>
    );
}
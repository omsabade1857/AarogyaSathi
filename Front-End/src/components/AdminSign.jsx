import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { adminLogin, login } from "../services/UserServices.js";

export function AdminSign() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loginError, setLoginError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await adminLogin(formData);
           console.log(result);
            if(result.status==false || result.message=="Invalid Email/Password"){
                console.log(result);
            setLoginError(true);
        }
            else{
                sessionStorage.setItem('adminId', result.id);
                navigate("/admindashboard");
           }
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    }
    return (
        <Container style={{ height:455 }} md={{ span: 3, offset: 5 }}>
            <Row>
                <Col md={{ span: 3, offset: 5 }}>
                <h5>Hello, Admin !!</h5>
                    </Col>
                    </Row>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter Email" name="email" onChange={handleChange} required/>
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
               
            </Row>
        </Container>
    );
}
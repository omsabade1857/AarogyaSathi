import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { doctorLogin } from "../services/DoctorServices.js";

export function DoctorSign() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loginError, setLoginError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await doctorLogin(formData);
            if(result.status) {
             console.log(result);
                sessionStorage.setItem('doctorId', result.id);
                navigate("/doctorprofile");
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
        <Container style={{ height:455 }} md={{ span: 3, offset: 5 }}>
            <Row>
                <Col md={{ span: 3, offset: 5 }}>
                <h5>Doctor's Login</h5>
                    </Col>
                    </Row>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" name="email" onChange={handleChange} required/>
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
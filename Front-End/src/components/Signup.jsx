import { Alert, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { savePatient } from '../services/UserServices';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", email: "", password: "", dateOfBirth: new Date("2020-03-25"), gender: "", city: "", mobileNo: "" });

    const [isSubmitted, setIsSubmitted] = useState(false);

    
    const [errors, setErrors] = useState({
        name: '', email: '', password: '', dateOfBirth: '', gender: '', city: '', mobileNo: ''
    });
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {     
            try {
                const result = await savePatient(formData);
                setFormData({ name: "", email: "", password: "", dateOfBirth: "", gender: "", city: "", mobileNo: "" });
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsSubmitted(false);
                    navigate("/signin");
                }, 1500);
                console.log(result.message);
            } catch (error) {
                console.log(error);
            }
        }
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateField = (fieldName, value) => {
        let errorMessage = '';

        switch (fieldName) {
            case 'name':
                if (value.trim().length < 4) {
                    errorMessage = 'Name must be at least 4 characters';
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    errorMessage = 'Invalid email address';
                }
                break;
            case 'mobileNo':
                const mobileNoRegex = /^\d{10}$/;
                if (!mobileNoRegex.test(value)) {
                    errorMessage = 'Phone number must be 10 digits';
                }
                break;
            case 'password':
                const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
                if (!passwordRegex.test(value)) {
                    errorMessage = 'Password must contain at least 6 characters, one uppercase letter, one lowercase letter, and one digit';
                }
                break;
            case 'city':
                const Regex=/^[a-zA-Z\s]+$/;
                if (!Regex.test(value)) {
                    errorMessage = 'Only letters and spaces are allowed';
                }
                break;
            default:
                break;
        }

        setErrors({
            ...errors,
            [fieldName]: errorMessage,
        });
    };

    const validateForm = () => {
        let isValid = true;

        Object.keys(formData).forEach((fieldName) => {
            const value = formData[fieldName];
            validateField(fieldName, value);
            if (errors[fieldName]) {
                isValid = false;
            }
        });

        return isValid;
    };

    return (
        <Container >
            <Col md={{ span: 3, offset: 5 }}>
                <h3 >Sign Up Here !</h3>
            </Col>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={isSubmitted ? formData.name : null} name="name" placeholder="Enter full name" onChange={handleChange} onBlur={() => validateField('name', formData.name)} required />
                            {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={isSubmitted ? formData.email : null} name="email" placeholder="Enter email" onChange={handleChange} onBlur={() => validateField('email', formData.email)} required />
                            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                        </Form.Group>
                    </Col>
                </Row>
                
                
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={isSubmitted ? formData.password : null} name="password" placeholder="Password" onChange={handleChange} onBlur={() => validateField('password', formData.password)} required />
                            {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="number" value={isSubmitted ? formData.mobileNo : null} name="mobileNo" placeholder="Enter Contact Number" onChange={handleChange} onBlur={() => validateField('mobileNo', formData.mobileNo)} required />
                            {errors.mobileNo && <span style={{ color: 'red' }}>{errors.mobileNo}</span>}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="date" name="dateOfBirth" value={isSubmitted ? formData.dateOfBirth : null} onChange={handleChange} onBlur={() => validateField('dateOfBirth', formData.dateOfBirth)} required />
                            {errors.dateOfBirth && <span style={{ color: 'red' }}>{errors.dateOfBirth}</span>}
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Check
                            type="radio"
                            label="Male"
                            name="gender"
                            value="MALE"
                            onChange={handleChange}
                        />
                        <Form.Check
                            type="radio"
                            label="Female"
                            name="gender"
                            value="FEMALE"
                            onChange={handleChange}
                        />
                        {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" name="city" value={isSubmitted ? formData.city : null} placeholder="Enter the city you live in" onChange={handleChange} onBlur={() => validateField('city', formData.city)} required />
                            {errors.city && <span style={{ color: 'red' }}>{errors.city}</span>}
                        </Form.Group>
                    </Col>
                </Row>
               
                <Col md={{ span: 2, offset: 6 }}>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Col>
            </Form>
            <Row className="mt-3">
                <Col md={{ span: 4, offset: 4 }}>
                    {isSubmitted ? <Alert variant="success">Sign Up Successfully Completed!</Alert> : null}
                </Col>
            </Row>
        </Container>
    );
}
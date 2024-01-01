import { Alert, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import { saveUser } from '../services/UserServices';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function Doctor() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({doctorName: "", email: "", password: "", mobileNo: "" ,qualification:"",specialization:""});

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [responseData, setResponseData] = useState({});
    //cp
    const [errors, setErrors] = useState({
       doctorName: '', email: '', password: '',mobileNo: '',qualification:'',specialization:''
    });
    //

    function register(event){
        event.preventDefault();
        if (validateForm()) {       //cp
                //const result =saveUser(formData);
                let url = `http://localhost:8080/doctorsignup`;
                axios.post(url,formData).then((response) => {
                setFormData({doctorName: "", email: "", password: "",mobileNo: "" ,qualification:"",specialization:""});
                setResponseData(response.data)
                setIsSubmitted(true);
                // setTimeout(() => {
                //     setIsSubmitted(false);
                //     navigate("/signin");
                // }, 1500);
                //console.log(result.message);
                if(response.data.status)
                    alert("Doctor Added!");
                else
                    alert("Doctor Not Added!");
                navigate("/admindashboard")
                })
    }
}
    // //cp
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

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
                const phoneRegex = /^\d{10}$/;
                if (!phoneRegex.test(value)) {
                    errorMessage = 'Phone number must be 10 digits';
                }
                break;
            case 'password':
                const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
                if (!passwordRegex.test(value)) {
                    errorMessage = 'Password must contain at least 6 characters, one uppercase letter, one lowercase letter, and one digit';
                }
                break;
            case 'qualification':
                    // if (value.trim().length < 15) {
                    //     errorMessage = 'Qualification must be at least 15 characters';
                    // }
                    // break;
                    const qualRegex=/^[a-zA-Z\s]+$/;
                    if (!qualRegex.test(value)) {
                        errorMessage = 'Only letters and spaces are allowed';
                    }
                    break;
            case 'specialization':
                    //  if (value.trim().length < 15) {
                    //     errorMessage = 'Specialization must be at least 15 characters';
                    //  }
                    // break;
                    const specRegex=/^[a-zA-Z\s]+$/;
                    if (!specRegex.test(value)) {
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
    //
    // const [userData, setUserData] = useState({});
    

    function handleInput(event) {
        let name = event.target.name;
        let value = event.target.value;
        // setFormData(formData => {
        //     formData[name] = value;
        //     return formData;
        setFormData({
                    ...formData,
                    [name]: value,
                });        
    }

    // function register(event) {
    //     event.preventDefault();
    //     console.log(formData);
    //     let url = `http://localhost:8080/register`;
    //     axios.post(url,formData).then((response) => {
    //         //console.log(response.data);
    //         setResponseData(response.data);
    //         if(response.data.status)
    //             alert("Done!");
    //         else
    //             alert("Not done!");
    //         navigate("/")
    //     })
    // }
    function redirect(){
        navigate("/admindashboard");
      }
    return (
        <>
        <Container className="mt-4" md={{ span: 3, offset: 5 }}>
        <Button onClick={redirect}>Back</Button>
        </Container> 
        <Container >
            <Col md={{ span: 3, offset: 5 }}>
                <h3 >Add Doctor Here !!</h3>
            </Col>
            <Form onSubmit={register}>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={isSubmitted ? formData.doctorName : null} name="doctorName" placeholder="Enter full name" onChange={handleInput} onBlur={() => validateField('doctorName', formData.doctorName)} required />
                            {errors.doctorName && <span style={{ color: 'red' }}>{errors.doctorName}</span>}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={isSubmitted ? formData.email : null} name="email" placeholder="Enter email" onChange={handleInput} onBlur={() => validateField('email', formData.email)} required />
                            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                        </Form.Group>
                    </Col>
                </Row>           
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={isSubmitted ? formData.password : null} name="password" placeholder="Password" onChange={handleInput} onBlur={() => validateField('password', formData.password)} required />
                            {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" value={isSubmitted ? formData.mobileNo : null} name="mobileNo" placeholder="Enter Phone Number" onChange={handleInput} onBlur={() => validateField('mobileNo', formData.mobileNo)} required />
                            {errors.mobileNo && <span style={{ color: 'red' }}>{errors.mobileNo}</span>}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Qualification</Form.Label>
                            <Form.Control type="text" value={isSubmitted ? formData.qualification : null} name="qualification" placeholder="Enter qualification" onChange={handleInput} onBlur={() => validateField('qualification', formData.qualification)} required />
                            {errors.qualification && <span style={{ color: 'red' }}>{errors.qualification}</span>}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Specialization</Form.Label>
                            <Form.Control type="text" value={isSubmitted ? formData.specialization : null} name="specialization" placeholder="Enter specialization" onChange={handleInput} onBlur={() => validateField('specialization', formData.specialization)} required />
                            {errors.specialization && <span style={{ color: 'red' }}>{errors.specialization}</span>}
                        </Form.Group>
                    </Col>
                </Row>
                {/* <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="date" name="dob" value={isSubmitted ? formData.dob : null} onChange={handleChange} onBlur={() => validateField('dob', formData.dob)} required />
                            {errors.dob && <span style={{ color: 'red' }}>{errors.dob}</span>}
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Check
                            type="radio"
                            label="Male"
                            name="gender"
                            value="male"
                            onChange={handleChange}
                        />
                        <Form.Check
                            type="radio"
                            label="Female"
                            name="gender"
                            value="female"
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
                </Row> */}
                {/* <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" name="state" value={isSubmitted ? formData.state : null} placeholder="Enter the state you live in" onChange={handleChange} onBlur={() => validateField('state', formData.state)} required />
                            {errors.state && <span style={{ color: 'red' }}>{errors.state}</span>}
                        </Form.Group>
                    </Col>
                </Row> */}
                <Col md={{ span: 3, offset: 6 }}>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Col>
            </Form>
            <Row className="mt-3">
                <Col md={{ span: 4, offset: 4 }}>
                    {isSubmitted ? <Alert variant="success">Addition of Doctor Successfully Completed!</Alert> : null}
                </Col>
            </Row>
        </Container>
        </>
    );
}
import { Button, Col, Container, Row, Table } from "react-bootstrap";

import { getPatientBookings, getPatientHistory, getUserProfile } from "../services/UserServices";
import { useState, useEffect } from "react";
import { DeleteAppointment, UpdateAppointment } from "../services/DoctorServices";
import './Profile.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../services/TokenUtil";

export function Profile() {
    const patientId = sessionStorage.getItem('patientId');
    const navigate = useNavigate();
    const [patient, setPatient] = useState({ name: "", email: "", dateOfBirth: "", gender: "", city: "",mobileNo: "" ,patientId:""});
    // const [bookings, setBookings] = useState([]);
    

    const getUserInfo = async (id) => {
        try {
            const result = await getUserProfile(id);
            console.log(result);
            if (result.status == 401) {
                console.log("User Not Found");
              }
              else {
                
            setPatient(result.patient);
            // setBookings(result.booking);
            // console.log(bookings);
        }
        } catch (error) {
            console.log(error);
        }
    }

    const [bookingDate, setBookingDate] = useState("");

    const handleNewDate = (e) => {
        setBookingDate(e.target.value);
    }

    const [bookings, setBookings] = useState([]);
    const getBookings = async (id) => {
        try {
            const result = await getPatientBookings(id);
            setBookings(result);
            console.log(bookings);
        }catch(error){
            console.log(error);
        }

    }

    const [history, setHistory] = useState([]);
    const getHistory = async (id) => {
        try {
            const result = await getPatientHistory(id);
            setHistory(result);
            console.log(history);
        }catch(error){
            console.log(error);
        }

    }

    const handleUpdate = (appId) => {
        const updatedRec = { newDate: bookingDate }
        const result = UpdateAppointment(updatedRec, appId);
        setBookingDate("");
        alert("Appointment updated successfully");
        getBookings(patientId);
    }

    const handleDelete =async (appId)=>{
        const result = await DeleteAppointment(appId);
        alert('Appointment deleted successfully');
        getBookings(patientId);    
    }

    useEffect(() => {
       if(isAuthenticated()){
       getUserInfo(patientId);
       getBookings(patientId);
       getHistory(patientId);
    }
    else
    navigate("/signin");
    }, []);

    function bookApp(){
        navigate("/book-appointment");
    }

    return (
        <>
        <div style={{ textAlign: 'center', marginTop: '3%', color:"blue"}}>
        <h3>  My Profile</h3>
        </div>
           <Container className="hover-container" style={{border:'1px solid black',marginTop:'3%',marginBottom:'3%',boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)' }}>
                
                <Row>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th>Aarogya ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone No.</th>
                                <th>Date Of Birth</th>
                                <th>Gender</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {patient.patientId}</td>
                                <td> {patient.name}</td>
                                <td> {patient.email}</td>
                                <td> {patient.mobileNo}</td>
                                <td> {patient.dateOfBirth}</td>
                                <td> {patient.gender}</td>
                                <td> {patient.city}</td>
                            </tr>
                        </tbody>
                    </Table>

                </Row>
            </Container>

            <Container>
            <Col md={{ span: 4, offset: 5 }}>
                <button onClick={bookApp}>Book An Appointment</button>
                </Col>
            </Container>

            <div style={{ textAlign: 'center', marginTop: '3%', color:"blue"}}>
                        <h3>  Booked Appointments</h3>
            </div>
            <Container className="hover-container" style={{border:'1px solid black',marginTop:'3%' ,boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)'}}>
                <Table className="mt-4">
                    <thead>
                        <tr>
                            <th>Name of Doctor</th>
                            <th>Specialization</th>
                            <th>Appointment Date</th>
                            <th>Change Date</th>
                            <th>Update Booking</th>
                            <th>Delete Booking</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((b) => {
                                return (
                                    <tr>
                                        <td>{b[2].doctorName}</td>
                                        <td>{b[2].specialization}</td>
                                        <td>{b[1]}</td>
                                        <td><input type="date" name="date" onChange={handleNewDate} /></td>
                                        <td>
                                            <Button variant="primary" onClick={() => handleUpdate(b[0])}>Update</Button>
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => handleDelete(b[0])}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <Col lg={4}>
        </Col>
            </Container>
           
            <div style={{ textAlign: 'center', marginTop: '3%', color:"blue"}}>
                        <h3>  Medical History</h3>
            </div>
<Container className="hover-container" style={{border:'1px solid black',marginTop:'3%',marginBottom:'3%',boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)' }}>
    <Table className="mt-4">
        <thead>
            <tr>
                <th>Aarogya ID</th>
                <th>Date of Visit</th>
                <th>Doctor Name</th>
                <th>Symptoms</th>
                <th>Medicines Prescribed</th>
                <th>Remarks</th>
            </tr>
        </thead>
        <tbody>
        {
                            history.map((hist) => {
                                return (
                                    <tr>
                                        <td>{patientId}</td>
                                        <td>{hist.visitDate}</td>
                                        <td>{hist.doctorName}</td>
                                        <td>{hist.symptoms}</td>
                                        <td>{hist.medicine}</td>
                                        <td>{hist.suggestion}</td>
                                                                               
                                    </tr>
                                )
                            })
                        }
        </tbody>
    </Table>
    <Col lg={4}>
{/* {isLoggedIn ? null : <Alert variant="danger">Please Login First</Alert>} */}
</Col>
</Container>




            </>
    );
}

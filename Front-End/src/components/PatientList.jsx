import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { BookAppointment, DoctorServices} from '../services/DoctorServices';
import { PatientServices } from '../services/UserServices';
import { Alert, Col, Container, Form, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './DoctorList.css';

export function PatientList() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [Patient, setPatient] = useState([]);
  
  async function populatePatientState() {
    try {
      const result = await PatientServices();
      // if (result.status == 401) {
      //   setIsLoggedIn(false);
      // }
      // else {
        // setIsLoggedIn(true);
        // console.log("Entered")
        console.log(result);
        setPatient(result.data);
        //console.log(doctors);
      // }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    populatePatientState();
  }, []);

  const [bookingDate, setBookingDate] = useState("");

  const handleBookingDateChange = (e) => {
    setBookingDate(e.target.value);
  }

  const handleSubmit = (dctr_id) => {
    const patientId = sessionStorage.getItem('patientId');
    const booking = { doctorId: dctr_id, date: bookingDate, patientId: patientId }
    const result = BookAppointment(booking);
    
    alert("Appointment booked successfully");
    navigate("/myprofile");

  }
  function redirect(){
    navigate("/admindashboard");
  }

  return (
    <>
    <Container className="mt-4" md={{ span: 3, offset: 5 }}>
   <Button onClick={redirect}>Back</Button>
   </Container> 
     <Container className="hover-container" style={{border:'1px solid black',marginTop:'3%' ,boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)'}} >
      <h2 className='text-center mt-4 mb-6'>Patient's List</h2>
        <Table className="mt-4">
          <thead>
            <tr>
              <th>Patient Id</th>  
              <th>Patients's Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Date Of Birth</th>
              <th>Gender</th>
              <th>City</th>
              
            </tr>
          </thead>
          <tbody>
            {
              Patient.map((d) => {
                return (
                  <tr>
                    <td>{d.patientId}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.mobileNo}</td>
                    <td>{d.dateOfBirth}</td>
                    <td>{d.gender}</td>
                    <td>{d.city}</td>

                    {/* <td>
                      <input type="date" name="date" onChange={handleBookingDateChange} />
                    </td>
                    <td>
                      <Button variant="primary" onClick={() => handleSubmit(d.doctorId)}>Book Now</Button>
                    </td> */}
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        {/* <Col lg={4}>
          {isLoggedIn ? null : <Alert variant="danger">Please Login First</Alert>}
        </Col> */}
      </Container>
    </>
  );
}

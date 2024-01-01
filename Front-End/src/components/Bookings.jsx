import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import { BookAppointment, DoctorServices } from '../services/DoctorServices';
import { Alert, Col, Container, Form, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function Bookings() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [doctors, setDoctors] = useState([]);
  
  async function populateDoctorState() {
    try {
      const result = await DoctorServices();
      // if (result.status == 401) {
      //   setIsLoggedIn(false);
      // }
      // else {
        // setIsLoggedIn(true);
        setDoctors(result.data);
      // }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    populateDoctorState();
  }, []);

  const [bookingDate, setBookingDate] = useState("");

  const handleBookingDateChange = (e) => {
    setBookingDate(e.target.value);
  }

  const handleSubmit = (dctr_id) => {
    const patientId = sessionStorage.getItem('patientId');
    const booking = { doctorId: dctr_id, visitDate: bookingDate, patientId: patientId }
    const result = BookAppointment(booking);
    
    alert("Appointment booked successfully");
    navigate("/myprofile");

  }


  return (
    <>
      <Container>

        <Table className="mt-4">
          <thead>
            <tr>
              <th>Doctor's Name</th>
              <th>Qualification</th>
              <th>Specialization</th>
              <th>Enter date</th>
              <th>Book Now</th>
            </tr>
          </thead>
          <tbody>
            {
              doctors.map((d) => {
                return (
                  <tr>
                    <td>{d.doctorName}</td>
                    <td>{d.qualification}</td>
                    <td>{d.specialization}</td>

                    <td>
                      <input type="date" name="date" onChange={handleBookingDateChange} />
                    </td>
                    <td>
                      <Button variant="primary" onClick={() => handleSubmit(d.doctorId)}>Book Now</Button>
                    </td>
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

import { Button, Col, Container, Row, Table } from "react-bootstrap";

import { getUserProfile } from "../services/UserServices";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  DeleteAppointment,
  UpdateAppointment,
  getBookingsByDoctorId,
  getDoctorProfile,
} from "../services/DoctorServices";
import { isAuthenticated } from "../services/TokenUtil";

export function DoctorProfile() {
  const doctorId= sessionStorage.getItem('doctorId');
  const [doctorInfo, setDoctorInfo] = useState({
    name: "",
    email: "",
    DateOfBirth: "",
    gender: "",
    specialization: "",
    qualification: "",
    mobileNo: "",
  });
  const [bookings, setBookings] = useState([]);

  const getDoctorInfo = async (doctorId) => {
    try {
      const result = await getDoctorProfile(doctorId);
      console.log(result);
        setDoctorInfo(result.doctor);
        //setBookings(result.booking);
        console.log(doctorInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const [appointments, setAppointments] = useState([]);
  const getBookingsInfo = async (doctorId) => {
    try {
      const result = await getBookingsByDoctorId(doctorId);
      console.log(result);
        setAppointments(result);
        console.log(appointments);
    } catch (error) {
      console.log(error);
    }
  };

  const [bookingDate, setBookingDate] = useState("");

  const handleNewDate = (e) => {
    setBookingDate(e.target.value);
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/presform");
  };

  useEffect(() => {
    if(isAuthenticated()){
    getDoctorInfo(doctorId);
    getBookingsInfo(doctorId);
    }
    else
    navigate("/dctrsignin");
  }, []);

  //helper function to calculate age
  function calculateAge(dateOfBirth) {
   
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }
  return (
    <>
      <container>
        <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-3">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle img-fluid"
                      style={{ width: 150 }}
                    />
                    <h5 className="my-3">
                      {doctorInfo.doctorName}
                    </h5>
                    <div className="d-flex justify-content-center mb-2"></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">ID</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{doctorInfo.doctorId}</p>
                      </div>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Mobile Number</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{doctorInfo.mobileNo}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Email</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{doctorInfo.email}</p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Qualification</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                        {doctorInfo.qualification}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h5 className="mb-0">Specialization</h5>
                      </div>

                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {doctorInfo.specialization}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </container>

      <div style={{ textAlign: 'center', marginTop: '3%', color:"green"}}>
                        <h3>  Booked Appointments</h3>
            </div>

      <Container>
        <Table className="mt-4">
          <thead>
            <tr>
              <th>Patient's Name</th>
              <th>Appointment Date</th>
              <th>Patient Gender</th>
              <th>Patient Age</th>
              <th>Check Up</th>
            </tr>
          </thead>
          { <tbody>
            {appointments.map((app) => {
                                return (
              <tr key={app.appId}>
                <td>{app[2].name}</td>
                <td>{app[1]}</td>
                <td>{app[2].gender}</td>
                <td>{calculateAge(app[2].dateOfBirth)}</td>
                <td>
                  <Button variant="primary" onClick={() => handleClick()}>
                    Check Now
                  </Button>
                </td>
              </tr>
            )})}
          </tbody> }
        </Table>
      </Container>


    </>
  );
}

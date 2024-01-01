import React, { useEffect } from "react";
import { Button, Col } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../services/TokenUtil";

export default function AdminDashBoard() {
  const navigate = useNavigate();
  function AddDoctor() {
    navigate("/admin/addDoctor");
  }
  function DoctorList() {
    navigate("/admin/doctorlist");
  }
  function PatientList() {
    navigate("/admin/patientlist");
  }

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        if (isAuthenticated()) {
         
          
        } else {
          navigate("/adminsignin");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        navigate("/adminsignin");
      }
    };

    checkAuthentication();
  }, [navigate]);

  // if (!isAuthenticated()) {
  //   navigate("/adminsignin");
  //   return null;
  // }
  
  return (
    <>
    {isAuthenticated() ? (
    <>
      <div className="col-lg-6 m-auto d-block mb-5 mt-5">
        <div
          className="modal-header text-light rounded-4"
          style={{ backgroundImage: "url(jadecolor.jpg)" }}>
          <h1 className="mb-2 mt-2 fs-1 mx-auto ">Admin DashBoard</h1>
        </div>
      </div>
      <br />
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-3">
            <div className="card" >
              <img
                src="https://th.bing.com/th/id/OIP.DLZGQPJjYL_PCDogycNJJQAAAA?pid=ImgDet&w=206&h=206&c=7&dpr=1.3"
                className="card-img-top"
                style={{ height: "300px" }}
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">

                  <b>Add Doctor</b>
                  <div className="text-center">

                    <Button onClick={AddDoctor} className='mt-4'>Add Doctor</Button>

                  </div>

                  <br />

                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3" >
            <div className="card" >
              <img
                src="https://th.bing.com/th/id/OIP.ryD6cxCQ_VsgWAFDKO05gAHaHa?pid=ImgDet&w=206&h=206&c=7&dpr=1.3"
                className="card-img-top"
                style={{ height: "300px" }}
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  <b>Show Doctor List</b>
                  <div className="text-center">

                    <Button onClick={DoctorList} className='mt-4'>Doctor List</Button>

                  </div>
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card" >
              <img
                src="https://amazingcharts.com/wp-content/uploads/2022/08/product-circles_amazing-chart-ehr-emr-circle.png"
                className="card-img-top"
                style={{ height: "300px" }}
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  <b>Show Patient List</b>
                  <div className="text-center">

                    <Button onClick={PatientList} className='mt-4'>Patient List</Button>

                  </div>
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
      <br />
     
    </> ) : null}
    </>
  );
  
}

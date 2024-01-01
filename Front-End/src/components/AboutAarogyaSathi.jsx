import React from 'react';
import Card from 'react-bootstrap/Card';
import Kanika from "../Photos/Kanika.jpg";
import Vaibhav from "../Photos/Vaibhav.jpg";
import Yash from "../Photos/Yash.jpg";
import Nishant from "../Photos/Nishant.jpg";
import Omkar from "../Photos/Omkar.jpg";

export function AboutAarogyaSathi(){

  return (
    <>
      <>
        <br />
        <div className="col-lg-5 m-auto d-block mb-5">
          <div
            className="modal-header text-light rounded-4"
            style={{ backgroundImage: "url(jadecolor.jpg)" }}
          >
            <h1 className="mb-5 mt-5 fs-1 mx-auto ">About Aarogyasathi</h1>
          </div>
        </div>
      </>
      {/* ////////////// */}
      <>
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="mb-4">
                <div className="card">
                  <div className="card-body fs-5" style={{ textAlign: "justify" }}>
                   {/* Content About Aarogyasathi */}
                  </div>
                </div>
              </div>
            </div>
            {/* Image carousel */}
            <div className="col-sm-12 col-md-6">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://www.myvmc.com/wp-content/uploads/2016/02/woman_female_doctor_nurses_smiling_hospital_working_595x240-595x240.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZsuMVAr6D-e7FiyRS155X6smWhAXEEPCu-A&usqp=CAU" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </>
      {/* ///////////// */}
      <>
        <div className="col-lg-5 m-auto d-block mb-5">
          <div
            className="modal-header text-light rounded-4"
            style={{ backgroundImage: "url(jadecolor.jpg)" }}
          >
            <h1 className="mb-5 mt-5 fs-1 mx-auto ">Our Presence</h1>
          </div>
        </div>
        <br />
        <div className="container text-light justify-content-center">
          <div
            className="row p-5 text-center "
            style={{ backgroundImage: "url(cyanbg.jpg)" }}
          >
            {/* <div className="col-md-1" /> */}
            <div className="col-md-4">
              <p style={{ fontSize: 30 }}>
                <b> 100% Safety </b>
              </p>
              <p style={{ fontSize: 25 }}> Free of Errors , Injuries , Accidents ,Infections and Disease Spread </p>
            </div>
            <div className="col-md-4 mr-4">
              <p style={{ fontSize: 30 }}>
                <b>Friendly doctor's </b>
              </p>
              <p style={{ fontSize: 25 }}> Each of our Consultant is Qualified Specialist in their Profile   </p>
            </div>
            <div className="col-md-4 mr-6">
              <p style={{ fontSize: 30 }}>
                <b> Clean Environment </b>
              </p>
              <p style={{ fontSize: 25 }}> Proper Waste Disposal , Clean Air , No Pests and Mosquitoes    </p>
            </div>
            {/* <div className="col-md-1" /> */}
          </div>
        </div>
        <br />
        <br />
      </>

      {/* ///////////////////// */}
      <div className="col-lg-5 m-auto d-block mb-5">
        <div
          className="modal-header text-light rounded-4"
          style={{ backgroundImage: "url(jadecolor.jpg)" }}
        >
          <h1 className="mb-5 mt-5 fs-1 mx-auto ">Members</h1>
        </div>
      </div>
      <div className="d-flex justify-content-around mt-5">
        <Card style={{ width: '18rem' }} className="shadow">
          <Card.Img variant="top" src={Kanika} />
          <Card.Body>
            <Card.Title>Kanika Rawal</Card.Title>
            <Card.Text>Developer and Artist</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="shadow">
          <Card.Img variant="top" src={Nishant} />
          <Card.Body>
            <Card.Title>Nishant Bangar</Card.Title>
            <Card.Text>Developer and Gamer</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="shadow">
          <Card.Img variant="top" src={Omkar} />
          <Card.Body>
            <Card.Title>Omkar Yelam</Card.Title>
            <Card.Text>Developer and enthusiast</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="shadow">
          <Card.Img variant="top" src={Vaibhav} />
          <Card.Body>
            <Card.Title>Vaibhav Yadav</Card.Title>
            <Card.Text>Developer and Gamer enthusiast</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="shadow">
          <Card.Img variant="top" src={Yash} />
          <Card.Body>
            <Card.Title>Yash Patil</Card.Title>
            <Card.Text>Developer and enthusiast</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );

}
import React from 'react';
import Card from 'react-bootstrap/Card';
import Kanika from "../Photos/Kanika.jpg";
import Vaibhav from "../Photos/Vaibhav.jpg";
import Omkar from "../Photos/Omkar.jpg";
import Nishant from "../Photos/Nishant.jpg";
import Yash from "../Photos/Yash.jpg";
import { Container } from 'react-bootstrap';
export function About() {

  const containerStyle = {
    color: "black",
    fontFamily: "Segoe UI",
    textAlign: "center",
    marginTop: "50px", 
    marginBottom: "50px", 

  };
  return (
    <>
       
        <Container style={containerStyle} >
        <h4 >Welcome to Aarogya Sathi where healthcare meets innovation!</h4>
        </Container>
        <Container style={containerStyle} >
        <p className="col-lg-6 m-auto d-block fs-5">
        Aarogya Sathi is a collaborative effort of a dynamic team of healthcare
        experts, software engineers, and innovators. With a shared vision of
        transforming healthcare delivery, we bring together expertise from the
        medical field and the tech industry to create a platform that redefines
        the patient-doctor relationship.
      </p>
      </Container>
   
      <div className="col-lg-4 m-auto d-block mb-5">
        <div style={{backgroundColor:"#557c55"}}
          className="modal-header text-light rounded-4"
        >
          <h4 className="mb-2 mt-2 fs-1 mx-auto text-light" >Founders</h4>
        </div>
      </div>
      <Container>
      <div className="d-flex justify-content-around mt-5">
        <Card style={{ width: '18rem' }} className="shadow">
          <Card.Img style={{height:"300px"}} variant="top" src={Kanika} />
          <Card.Body>
            <Card.Title>Kanika Rawal</Card.Title>
            <Card.Text>Student, PG-DAC, CDAC Khargar<br />
              Batch - September 2023</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="shadow">
          <Card.Img style={{height:"300px"}} variant="top" src={Nishant} />
          <Card.Body>
            <Card.Title>Nishant Bangar</Card.Title>
            <Card.Text>Student, PG-DAC, CDAC Khargar<br />
              Batch - September 2023</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="shadow">
          <Card.Img style={{height:"300px"}} variant="top" src={Omkar} />
          <Card.Body>
            <Card.Title>Omkar Yelam</Card.Title>
            <Card.Text>Student, PG-DAC, CDAC Khargar<br />
              Batch - September 2023</Card.Text>
          </Card.Body>
        </Card>
        </div>
        </Container>
        <Container>
        <div className="d-flex justify-content-around mt-5">
        <Card style={{ width: '18rem' }} className="shadow">
          <Card.Img style={{height:"300px"}} variant="top" src={Vaibhav} />
          <Card.Body>
            <Card.Title>Vaibhav Yadav</Card.Title>
            <Card.Text>Student, PG-DAC, CDAC Khargar<br />
              Batch - September 2023</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="shadow">
          <Card.Img style={{height:"300px"}}  variant="top" src={Yash} />
          <Card.Body>
            <Card.Title>Yash Patil</Card.Title>
            <Card.Text>Student, PG-DAC, CDAC Juhu<br />
              Batch - September 2023</Card.Text>
          </Card.Body>
        </Card>
        </div>
        </Container>
      
    </>
  );

}


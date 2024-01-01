import React from 'react';
import Card from 'react-bootstrap/Card';
import Kanika from "../Photos/Kanika.jpg";
import Apurv from "../Photos/Apurv.jpg";
import Archit from "../Photos/Archit.jpg";


function About() {

  return (
    <div className="d-flex justify-content-around mt-5">
      <Card style={{ width: '18rem' }} className="shadow">
        <Card.Img variant="top" src={Kanika} />
        <Card.Body>
          <Card.Title>Kanika Rawal</Card.Title>
          <Card.Text>Developer and Artist</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className="shadow">
        <Card.Img variant="top" src={""} />
        <Card.Body>
          <Card.Title>Nishant Bangar</Card.Title>
          <Card.Text>Developer and Gamer</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className="shadow">
        <Card.Img variant="top" src={""} />
        <Card.Body>
          <Card.Title>Omkar Yelam</Card.Title>
          <Card.Text>Developer and enthusiast</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className="shadow">
        <Card.Img variant="top" src={""} />
        <Card.Body>
          <Card.Title>Vaibhav Yadav</Card.Title>
          <Card.Text>Developer and Gamer enthusiast</Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }} className="shadow">
        <Card.Img variant="top" src={""} />
        <Card.Body>
          <Card.Title>Yash Patil</Card.Title>
          <Card.Text>Developer and enthusiast</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
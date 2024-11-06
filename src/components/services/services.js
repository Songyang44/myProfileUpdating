import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./services.css";
import SkillCard from "../skillcard/skillcard";

function Services() {
  return (
    <>
      
      {/* <Card className="card1" style={{ width: '18rem' }}>
        <Card.Img className="cardimage" variant="top" src="homepage.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
           example
          </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}

    <SkillCard title="Software Development Engineer" description="Lorem ipsum dolor sit amet..." customClass="card1" number="1"/>
    <SkillCard title="Software Development Engineer" description="Lorem ipsum dolor sit amet..." customClass="card2" number="2"/>
    <SkillCard title="Software Development Engineer" description="Lorem ipsum dolor sit amet..." customClass="card3" number="3"/>
    <SkillCard title="Software Development Engineer" description="Lorem ipsum dolor sit amet..." customClass="card4" number="4"/>
    </>
  );
}

export default Services;

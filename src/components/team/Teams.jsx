import React from "react";
import Card from "react-bootstrap/Card"; 
import Button from "react-bootstrap/Button"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import './Team.css';

const CardsContainer = () => {
 
  const cardsData = [
    {
      id: 1,
      Name:"Saba Atia",
      description:  "Frontend Developer",
    },
    {
      id: 2,
      Name:"Yaqoot Gharaibeh",
      description:  "Backend Developer",
    },
    {
      id: 3,
      Name:"Ahmad Owais",
      description:  "UI/UX Designer",
    },
    {
      id: 4,
      Name: "Sedra al awad",
      description: "UI/UX Designer",
    },
    {
      id: 5,
      Name: 'Enas Abu Nassar',
      description:'Project Manager',
    },
    {
      id: 6,
      Name:"Mohammed Alomari",
      description: "Project Manager",
    },
  ];

  return (
    <section class="section">
      
    <div className="container mt-5">
        <h1>Team</h1>
      <div className="row">
        {cardsData.map((card) => (
          <div key={card.id} className="col-md-4 mb-4">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{card.Name}</Card.Title> 
                <Card.Text>{card.description}</Card.Text> 
                <Button className="btn"> GIT HUB </Button> 
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default CardsContainer;


import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FixedSizeList as List } from "react-window";

import "./Team.css";


const CardsContainer = () => {
  const cardsData = [
    { id: 1, Name: "Saba Atia", description: "Frontend Developer" },
    { id: 2, Name: "Yaqoot Gharaibeh", description: "Backend Developer" },
    { id: 3, Name: "Ahmad Owais", description: "UI/UX Designer" },
    { id: 4, Name: "Sedra al awad", description: "UI/UX Designer" },
    { id: 5, Name: "Enas Abu Nassar", description: "Project Manager" },
    { id: 6, Name: "Mohammed Alomari", description: "Project Manager" },
  ];

  const CardItem = ({ index, style }) => {
    const card = cardsData[index];
   
    return (
      <div style={style} className="mb-4 list" >
        <Card style={{ width: "150px", height:"200px"}} className="team-card mx-auto">
          <Card.Body>
            <Card.Title>{card.Name}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
            <Button className="btn">GIT HUB</Button>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <section className="section">
      <div className="container mt-5">
        <div>
        <h1>Team</h1>
        </div>
      
        <List
          height={250}
          itemCount={cardsData.length}
          itemSize={200}
            layout="horizontal"
          width={200}
         
        >
          {CardItem}
        </List>
        </div>
  
    </section>
  );
};

export default CardsContainer;
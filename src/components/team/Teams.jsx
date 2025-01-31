import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FixedSizeList as List } from "react-window";
import { useTranslation } from 'react-i18next';

import "./Team.css";

const CardsContainer = () => {
  const { t } = useTranslation(); 

  const cardsData = [
    { id: 1, nameKey: "team.name.name1", descKey: "team.desc.desc1" },
    { id: 2, nameKey: "team.name.name2", descKey: "team.desc.desc2" },
    { id: 3, nameKey: "team.name.name3", descKey: "team.desc.desc3" },
    { id: 4, nameKey: "team.name.name4", descKey: "team.desc.desc4" },
    { id: 5, nameKey: "team.name.name5", descKey: "team.desc.desc5" },
    { id: 6, nameKey: "team.name.name6", descKey: "team.desc.desc6" }
  ];

  const CardItem = ({ index, style }) => {
    const card = cardsData[index];

    return (
      <div style={style} className="mb-4 list">
        <Card style={{ width: "150px", height: "200px" }} className="team-card mx-auto">
          <Card.Body>
            <Card.Title>{t(card.nameKey)}</Card.Title> 
            <Card.Text>{t(card.descKey)}</Card.Text>
            <Button className="btn">{t("team.btn")}</Button>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <section className="section">
      <div className="container mt-5">
        <h1>{t("team.title")}</h1> 
        <List
          height={250}
          itemCount={cardsData.length}
          itemSize={200}
          layout="horizontal"
          width={600}
        >
          {CardItem}
        </List>
      </div>
    </section>
  );
};

export default CardsContainer;
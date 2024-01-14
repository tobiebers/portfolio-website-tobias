import React from 'react';
import { Card } from 'react-bootstrap';


function HeroCard() {
  return (
    <Card className="fade-in-card">
      <Card.Body>
        <Card.Title>Card Titel</Card.Title>
        <Card.Text>
          Einige schnelle Beispieltexte, um den Inhalt der Card zu bauen.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HeroCard;

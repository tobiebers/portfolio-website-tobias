import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function PortfolioProjects() {
  return (
    <Container className="my-5" id="projekte">
      <h2 className="text-center mb-4">Meine Projekte</h2>
      <Row>
        {/* Projekt-Karten */}
        {/* Beispiel für ein Projekt */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="/path-to-your-image.jpg" />
            <Card.Body>
              <Card.Title>Projekt 1</Card.Title>
              <Card.Text>
                Eine kurze Beschreibung des Projekts.
              </Card.Text>
              <Button variant="primary">Mehr erfahren</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Fügen Sie weitere Projekte hinzu */}
      </Row>
    </Container>
  );
}

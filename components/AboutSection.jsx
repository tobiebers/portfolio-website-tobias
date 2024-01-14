import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function AboutSection() {
  return (
    <Container className="my-5" id="ueber-mich">
      <h2 className="text-center mb-4">Über Mich</h2>
      <Row>
        <Col md={6}>
          <img src="/path-to-your-image.jpg" alt="Profilbild" className="img-fluid" />
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div>
            <p>Ich bin ein passionierter Webentwickler mit einem Fokus auf moderne Webtechnologien. Ich liebe es, kreative und benutzerfreundliche Lösungen zu entwickeln.</p>
            <p>Hier können Sie mehr über meine Erfahrungen, Fähigkeiten und Projekte erfahren.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

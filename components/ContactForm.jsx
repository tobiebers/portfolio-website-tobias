import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
export default function ContactForm() {
  return (
    <Container className="my-5" id="kontakt">
      <h2 className="text-center mb-4">Kontaktieren Sie Mich</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Ihr Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ihre E-Mail-Adresse" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nachricht</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Ihre Nachricht" />
        </Form.Group>
        <Button variant="primary" type="submit">Senden</Button>
      </Form>
    </Container>
  );
}
import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 fixed-bottom">
      <Container>
        <p>© 2024 Mein Portfolio. Alle Rechte vorbehalten.</p>
        {/* Soziale Medien Links oder Kontaktinformationen */}
      </Container>
    </footer>
  );
}

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Router benötigt für RouterLink
import Footer from './Footer';

// Test-Suite für die Footer-Komponente
describe('Footer Component', () => {

  // Test: Stellt sicher, dass der Footer korrekt gerendert wird
  test('renders correctly', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    // Überprüfen, ob der Haupttext "Wolfsburg Connect" vorhanden ist
    expect(screen.getByText(/Wolfsburg Connect/i)).toBeInTheDocument();

    // Überprüfen, ob der Copyright-Text vorhanden ist (mit dynamischem Jahr)
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Wolfsburg Connect. Alle Rechte vorbehalten.`)).toBeInTheDocument();

    // Überprüfen, ob einer der Links vorhanden ist (Beispiel)
    expect(screen.getByRole('link', { name: /über uns/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /kontakt/i })).toBeInTheDocument();
  });

  // Test: Stellt sicher, dass die Links die korrekten Pfade haben
  test('renders links with correct paths', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    expect(screen.getByRole('link', { name: /über uns/i })).toHaveAttribute('href', '/ueber-uns');
    expect(screen.getByRole('link', { name: /kontakt/i })).toHaveAttribute('href', '/contact');
    expect(screen.getByRole('link', { name: /datenschutz/i })).toHaveAttribute('href', '/privacy');
    expect(screen.getByRole('link', { name: /nutzungsbedingungen/i })).toHaveAttribute('href', '/terms');
    expect(screen.getByRole('link', { name: /hilfe/i })).toHaveAttribute('href', '/help');
  });

}); 
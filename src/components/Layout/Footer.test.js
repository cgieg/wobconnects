import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Router benötigt für RouterLink
import Footer from './Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

// Test-Suite für die Footer-Komponente
describe('Footer Component', () => {

  // Test: Stellt sicher, dass der Footer korrekt gerendert wird
  test('renders correctly', () => {
    render(
      <Router>
        <ThemeProvider theme={theme}>
          <Footer />
        </ThemeProvider>
      </Router>
    );

    // Überprüfen, ob der Haupttext "wobconnects" vorhanden ist
    expect(screen.getByText(/wobconnects/i)).toBeInTheDocument();

    // Überprüfen, ob der Copyright-Text vorhanden ist (mit dynamischem Jahr)
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} wobconnects. Alle Rechte vorbehalten.`)).toBeInTheDocument();

    // Überprüfen, ob einer der Links vorhanden ist (Beispiel)
    expect(screen.getByRole('link', { name: /über uns/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /kontakt/i })).toBeInTheDocument();
  });

  // Test: Stellt sicher, dass die Links die korrekten Pfade haben
  test('renders links with correct paths', () => {
    render(
      <Router>
        <ThemeProvider theme={theme}>
          <Footer />
        </ThemeProvider>
      </Router>
    );

    expect(screen.getByRole('link', { name: /über uns/i })).toHaveAttribute('href', '/ueber-uns');
    expect(screen.getByRole('link', { name: /kontakt/i })).toHaveAttribute('href', '/contact');
    expect(screen.getByRole('link', { name: /datenschutz/i })).toHaveAttribute('href', '/privacy');
    expect(screen.getByRole('link', { name: /nutzungsbedingungen/i })).toHaveAttribute('href', '/terms');
    expect(screen.getByRole('link', { name: /hilfe/i })).toHaveAttribute('href', '/help');
  });

}); 
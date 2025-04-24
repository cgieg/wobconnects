import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

// Test-Suite für die AboutPage
describe('AboutPage Component', () => {

  // Test: Stellt sicher, dass die Seite korrekt gerendert wird
  test('renders correctly with headings and text', () => {
    render(
      <ThemeProvider theme={theme}>
        <AboutPage />
      </ThemeProvider>
    );

    // Überprüfen, ob die Hauptüberschrift vorhanden ist
    expect(screen.getByRole('heading', { name: /über wobconnects/i, level: 1 })).toBeInTheDocument();

    // Überprüfen der Unterüberschrift
    expect(screen.getByRole('heading', { name: /unsere mission: eine vernetzte nachbarschaft/i, level: 2 })).toBeInTheDocument();

    // Überprüfen, ob ein Teil des Einführungstextes vorhanden ist
    // Das Regex /i macht den Test case-insensitive
    expect(screen.getByText(/Willkommen bei wobconnects, der hyper-lokalen Plattform/i)).toBeInTheDocument();
    expect(screen.getByText(/starke Nachbarschaften der Schlüssel zu einer lebenswerten Stadt sind/i)).toBeInTheDocument();
    expect(screen.getByText(/Dieses Projekt befindet sich in der Entwicklung/i)).toBeInTheDocument();
  });

}); 
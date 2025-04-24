import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

function TermsPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Nutzungsbedingungen & Regeln für wobconnects
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          1. Akzeptanz der Bedingungen
        </Typography>
        <Typography paragraph>
          Willkommen bei wobconnects! Durch die Nutzung unserer Plattform stimmen Sie den folgenden Nutzungsbedingungen zu. Bitte lesen Sie diese sorgfältig durch.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          2. Geltungsbereich
        </Typography>
        <Typography paragraph>
          Diese Bedingungen regeln die Nutzung der wobconnects Plattform, einschließlich aller zugehörigen Webseiten, Funktionen und Dienste.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          3. Nutzerkonto
        </Typography>
        <Typography paragraph>
          Für die Nutzung bestimmter Funktionen ist eine Registrierung erforderlich. Sie sind für die Sicherheit Ihres Kontos und Passworts verantwortlich. Ihre Angaben müssen korrekt und aktuell sein.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          4. Verhaltensregeln
        </Typography>
        <Typography paragraph>
          Wir erwarten einen respektvollen und konstruktiven Umgangston. Verboten sind insbesondere:
          - Beleidigungen, Diskriminierung, Hassrede
          - Verbreitung illegaler oder schädlicher Inhalte
          - Spam oder unerwünschte Werbung
          - Handlungen, die die Sicherheit oder Funktion der Plattform gefährden.
        </Typography>
        
        <Typography variant="h6" component="h2" gutterBottom>
          5. Haftung
        </Typography>
        <Typography paragraph>
          wobconnects stellt lediglich die Plattform zur Verfügung. Wir übernehmen keine Haftung für die von Nutzern eingestellten Inhalte, die Richtigkeit von Angeboten oder das Verhalten anderer Nutzer.
          Jede Interaktion erfolgt auf eigenes Risiko.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          6. Änderungen der Bedingungen
        </Typography>
        <Typography paragraph>
          Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Über wesentliche Änderungen werden wir Sie informieren.
        </Typography>
         
         <Typography paragraph sx={{ mt: 4 }}>
           *Dies ist ein Platzhaltertext. Vollständige und rechtssichere Nutzungsbedingungen sollten von einem Fachexperten erstellt oder geprüft werden.*
         </Typography>
      </Paper>
    </Container>
  );
}

export default TermsPage; 
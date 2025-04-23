import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

function TermsPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Nutzungsbedingungen
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary" sx={{ mb: 3 }}>
          Regeln für die Nutzung von Wolfsburg Connect
        </Typography>

        <Box sx={{ '& p': { mb: 2 }, '& h6': { mt: 3, mb: 1, fontWeight: 'bold' } }}>
          <Typography variant="body1" paragraph>
            Willkommen bei Wolfsburg Connect! Durch die Nutzung unserer Plattform stimmen Sie den folgenden Nutzungsbedingungen zu. Bitte lesen Sie diese sorgfältig durch.
          </Typography>
          
          <Typography variant="h6">1. Geltungsbereich</Typography>
          <Typography variant="body1" paragraph>
            Diese Bedingungen regeln die Nutzung der Wolfsburg Connect Plattform, einschließlich aller zugehörigen Webseiten, Funktionen und Dienste.
          </Typography>

          <Typography variant="h6">2. Nutzerkonto</Typography>
          <Typography variant="body1" paragraph>
            Für die Nutzung bestimmter Funktionen ist eine Registrierung erforderlich. Sie sind für die Sicherheit Ihres Kontos und Passworts verantwortlich. Ihre Angaben müssen korrekt und aktuell sein.
          </Typography>

          <Typography variant="h6">3. Verhaltensregeln</Typography>
          <Typography variant="body1" paragraph>
            Wir erwarten einen respektvollen und konstruktiven Umgangston. Verboten sind insbesondere:
            - Beleidigungen, Diskriminierung, Hassrede
            - Verbreitung illegaler oder schädlicher Inhalte
            - Spam oder unerwünschte Werbung
            - Handlungen, die die Sicherheit oder Funktion der Plattform gefährden.
          </Typography>
          
          <Typography variant="h6">4. Haftung</Typography>
          <Typography variant="body1" paragraph>
            Wolfsburg Connect stellt lediglich die Plattform zur Verfügung. Wir übernehmen keine Haftung für die von Nutzern eingestellten Inhalte, die Richtigkeit von Angeboten oder das Verhalten anderer Nutzer. Die Nutzung erfolgt auf eigene Gefahr.
          </Typography>

          <Typography variant="h6">5. Änderungen der Bedingungen</Typography>
          <Typography variant="body1" paragraph>
            Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Über wesentliche Änderungen werden wir Sie informieren.
          </Typography>
           
           <Typography variant="body1" paragraph sx={{ mt: 4 }}>
             *Dies ist ein Platzhaltertext. Vollständige und rechtssichere Nutzungsbedingungen sollten von einem Fachexperten erstellt oder geprüft werden.*
           </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default TermsPage; 
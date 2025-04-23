import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

function PrivacyPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Datenschutzerklärung
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary" sx={{ mb: 3 }}>
          Ihre Privatsphäre ist uns wichtig
        </Typography>

        <Box sx={{ '& p': { mb: 2 }, '& h6': { mt: 3, mb: 1, fontWeight: 'bold' } }}>
          <Typography variant="body1" paragraph>
            Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten“) innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unser Social Media Profile auf (nachfolgend gemeinsam bezeichnet als „Onlineangebot“).
          </Typography>
          
          <Typography variant="h6">Verantwortlicher</Typography>
          <Typography variant="body1" paragraph>
            [Name des Verantwortlichen/Betreibers]
            [Adresse]
            [E-Mail-Adresse]
            [Link zum Impressum]
          </Typography>

          <Typography variant="h6">Arten der verarbeiteten Daten</Typography>
          <Typography variant="body1" paragraph>
            - Bestandsdaten (z.B., Namen, Adressen).
            - Kontaktdaten (z.B., E-Mail, Telefonnummern).
            - Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).
            - Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).
            - Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen).
          </Typography>

           <Typography variant="h6">Zweck der Verarbeitung</Typography>
           <Typography variant="body1" paragraph>
            - Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte.
            - Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.
            - Sicherheitsmaßnahmen.
            - Reichweitenmessung/Marketing
           </Typography>
           
           <Typography variant="h6">Ihre Rechte</Typography>
           <Typography variant="body1" paragraph>
             Sie haben das Recht, Auskunft über die bei uns über Sie gespeicherten Daten zu erhalten. Ebenso haben Sie das Recht auf Berichtigung, Sperrung oder, abgesehen von der vorgeschriebenen Datenspeicherung zur Geschäftsabwicklung, Löschung Ihrer personenbezogenen Daten. Bitte wenden Sie sich dazu an unseren Datenschutzbeauftragten. Die Kontaktdaten finden Sie [hier/am Anfang dieser Erklärung].
             [Weitere Rechte wie Widerspruchsrecht, Recht auf Datenübertragbarkeit etc. aufführen]
           </Typography>
           
           <Typography variant="body1" paragraph sx={{ mt: 4 }}>
             *Dies ist ein Platzhaltertext. Eine vollständige und rechtssichere Datenschutzerklärung sollte von einem Fachexperten erstellt oder geprüft werden.*
           </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default PrivacyPage; 
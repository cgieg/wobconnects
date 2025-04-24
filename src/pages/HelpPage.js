import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';

// Beispiel FAQ Daten
const faqData = [
  {
    question: 'Wie registriere ich mich?',
    answer: 'Klicken Sie auf der Startseite oder Anmeldeseite auf "Jetzt registrieren". Füllen Sie das Formular mit Ihren Daten aus und folgen Sie den Anweisungen.'
  },
  {
    question: 'Wie kann ich Hilfe anbieten oder suchen?',
    answer: 'Navigieren Sie zum "Hilfe-Hub". Dort können Sie bestehende Gesuche einsehen oder über einen Button (noch zu implementieren) eigene Angebote oder Gesuche erstellen.'
  },
  {
    question: 'Wie funktioniert das Teilen von Ressourcen?',
    answer: 'Unter "Ressourcen" sehen Sie Gegenstände, die von Nachbarn geteilt werden. Sie können Gegenstände anfragen oder eigene hinzufügen (Funktion noch in Entwicklung).'
  },
  {
    id: 'kosten',
    question: 'Ist die Nutzung von wobconnects kostenlos?',
    answer: 'Ja, die grundlegende Nutzung der Plattform ist für alle Nachbarn kostenlos. Wir finanzieren uns über freiwillige Spenden und ggf. zukünftige, optionale Zusatzfunktionen.'
  },
  {
    question: 'An wen wende ich mich bei Problemen?',
    answer: 'Bei technischen Problemen oder Fragen zur Plattform nutzen Sie bitte das Kontaktformular auf der Kontaktseite.'
  }
];

function HelpPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Hilfe & FAQ
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary" sx={{ mb: 3 }}>
          Häufig gestellte Fragen
        </Typography>

        <Box>
          {faqData.map((faq, index) => (
            <Accordion key={index} sx={{ mb: 1 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
              >
                <Typography sx={{ fontWeight: 'medium' }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

         <Typography variant="body1" paragraph sx={{ mt: 4 }}>
            Haben Sie weitere Fragen? Zögern Sie nicht, uns über die <Link component={RouterLink} to="/contact">Kontaktseite</Link> zu erreichen.
        </Typography>

      </Paper>
    </Container>
  );
}

export default HelpPage; 
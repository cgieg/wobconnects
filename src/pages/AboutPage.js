import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Über Wolfsburg Connect
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary" sx={{ mb: 3 }}>
          Unsere Mission: Eine vernetzte Nachbarschaft
        </Typography>

        <Box sx={{ '& p': { mb: 2 } }}> {/* Fügt Abstand nach jedem Absatz hinzu */}
          <Typography variant="body1" paragraph>
            Willkommen bei Wolfsburg Connect, der hyper-lokalen Plattform, die darauf abzielt, 
            die Bewohner von Wolfsburg näher zusammenzubringen. In unserer schnelllebigen Welt 
            ist es leicht, den Kontakt zu den Menschen in unserer unmittelbaren Umgebung zu verlieren. 
            Wir wollen das ändern!
          </Typography>
          
          <Typography variant="body1" paragraph>
            Unsere Plattform wurde mit dem Ziel entwickelt, Nachbarschaftshilfe zu fördern, 
            das Teilen von Ressourcen zu vereinfachen und die lokale Gemeinschaft zu stärken. 
            Egal, ob Sie Hilfe beim Einkaufen benötigen, eine Bohrmaschine verleihen möchten 
            oder einfach nur wissen wollen, was in Ihrer Nachbarschaft los ist – Wolfsburg Connect 
            ist Ihr digitaler Treffpunkt.
          </Typography>
          
          <Typography variant="body1" paragraph>
            Wir glauben fest daran, dass starke Nachbarschaften der Schlüssel zu einer lebenswerten 
            Stadt sind. Durch die Förderung von gegenseitiger Unterstützung und Kommunikation 
            möchten wir einen positiven Beitrag zum Zusammenleben in Wolfsburg leisten.
          </Typography>

          <Typography variant="body1" paragraph>
            Dieses Projekt befindet sich in der Entwicklung und wird ständig verbessert. 
            Wir freuen uns über Ihr Feedback und Ihre Beteiligung!
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default AboutPage; 
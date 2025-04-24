import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Button,
  Avatar
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function WelcomePage() {
  // In einer echten Anwendung könnte man hier den Namen des neuen Benutzers anzeigen,
  // falls er im State oder Context verfügbar ist.
  // const { user } = useAuth(); // Beispiel

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Avatar sx={{ bgcolor: 'success.main', width: 56, height: 56, margin: 'auto', mb: 2 }}>
          <CheckCircleOutlineIcon />
        </Avatar>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Registrierung erfolgreich!
        </Typography>
        
        <Typography variant="h6" component="p" color="text.secondary" sx={{ mb: 3 }}>
          Willkommen bei Wolfsburg Connect! Schön, dass Sie dabei sind.
        </Typography>

        <Typography variant="body1" paragraph>
          Ihr Konto wurde erfolgreich erstellt. Bevor Sie alle Funktionen nutzen können,
          müssen Sie sich möglicherweise noch anmelden oder Ihre Adresse verifizieren 
          (dies hängt von der späteren Implementierung ab).
        </Typography>

        <Button 
          variant="contained" 
          color="primary" 
          component={RouterLink} 
          to="/login" // Leitet zur Login-Seite
          sx={{ mt: 2 }}
        >
          Jetzt anmelden
        </Button>
         {/* Optional: Link zum Profil oder Feed, falls direkt eingeloggt */}
         {/* 
         <Button 
           variant="outlined" 
           color="secondary" 
           component={RouterLink} 
           to="/feed" 
           sx={{ mt: 2, ml: 1 }}
         >
           Zum Feed
         </Button> 
         */}
      </Paper>
    </Container>
  );
}

export default WelcomePage; 

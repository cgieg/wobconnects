import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Container, Typography, Box, Paper, Avatar, Chip } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function ProfilePage() {
  const { user } = useAuth(); // Hole den aktuellen Benutzer aus dem Context

  if (!user) {
    // Dieser Fall sollte idealerweise durch ProtectedRoute abgedeckt sein,
    // aber als Fallback kann man eine Ladeanzeige oder Weiterleitung einbauen.
    return <Typography>Laden...</Typography>;
  }

  return (
    <Container maxWidth="sm">
       <Paper elevation={3} sx={{ padding: 3, marginTop: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ width: 56, height: 56, mr: 2 }}>{user.name ? user.name.charAt(0).toUpperCase() : '?'}</Avatar>
              <Box>
                <Typography variant="h5" component="h1">
                    {user.name || 'Unbekannter Benutzer'}
                </Typography>
                 <Chip
                     icon={user.isVerified ? <VerifiedUserIcon /> : <HelpOutlineIcon />}
                     label={user.isVerified ? "Adresse verifiziert" : "Adresse nicht verifiziert"}
                     color={user.isVerified ? "success" : "warning"}
                     size="small"
                     sx={{ mt: 0.5 }}
                 />
              </Box>
          </Box>
          <Typography variant="body1" gutterBottom>
            **E-Mail:** {user.email}
          </Typography>
          {/* Zeige optional Adresse nur wenn verifiziert oder zusätzliche Profildaten */}
          {user.address && ( // Zeige Adresse, falls vorhanden (Verifizierung als Bedingung entfernt für Demo)
              <Typography variant="body1" gutterBottom>
                **Adresse:** {user.address}
              </Typography>
          )}
          {/* Weitere Profilinformationen können hier hinzugefügt werden */}
          <Typography variant="body1" color="text.secondary" sx={{mt: 3}}>
              [Platzhalter für weitere Profilinformationen, z.B. angebotene Hilfe, geliehene Gegenstände, erstellte Posts]
          </Typography>
      </Paper>
    </Container>
  );
}

export default ProfilePage; 
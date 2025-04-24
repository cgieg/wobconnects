import React, { useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Container, Typography, Box, Paper, Avatar, Chip, Button } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CakeIcon from '@mui/icons-material/Cake';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

function calculateAge(dateString) {
  if (!dateString) return null;
  try {
    const birthday = new Date(dateString);
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
  } catch (error) {
    console.error("Error calculating age:", error);
    return null;
  }
}

function ProfilePage() {
  const { user, loading } = useAuth();
  const fileInputRef = useRef(null);

  console.log('ProfilePage - Auth State:', { user, loading });

  if (loading || !user) {
    if (loading) {
        return <Typography>Laden...</Typography>;
    } else {
        return <Typography>Bitte zuerst einloggen, um das Profil zu sehen.</Typography>;
    }
  }

  const userAge = calculateAge(user.dateOfBirth);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Ausgewählte Datei:", file);
      alert(`Platzhalter: Datei "${file.name}" ausgewählt. Upload-Logik fehlt noch.`);
    }
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Container maxWidth="sm">
       <Paper elevation={3} sx={{ padding: 3, marginTop: 4, textAlign: 'center' }}>
          <Avatar 
            sx={{ 
              width: 100, 
              height: 100, 
              margin: 'auto',
              mb: 2 
            }}
            src={user.photoURL}
          >
            {!user.photoURL && user.name ? user.name.charAt(0).toUpperCase() : null} 
          </Avatar>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }} 
          />
          <Button
            variant="outlined"
            size="small"
            startIcon={<PhotoCamera />}
            onClick={handleUploadButtonClick}
            sx={{ mb: 2 }}
          >
            Foto ändern
          </Button>

          <Typography variant="h5" component="h1" gutterBottom>
              {user.name || 'Unbekannter Benutzer'}
          </Typography>
          <Chip
              icon={user.isVerified ? <VerifiedUserIcon /> : <HelpOutlineIcon />}
              label={user.isVerified ? "Adresse verifiziert" : "Adresse nicht verifiziert"}
              color={user.isVerified ? "success" : "warning"}
              size="small"
              sx={{ mb: 2 }}
          />
          <Box sx={{ textAlign: 'left', mt: 2 }}>
              <Typography variant="body1" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                  <CakeIcon sx={{ mr: 1, color: 'text.secondary' }} /> 
                  **Alter:** {userAge !== null ? `${userAge} Jahre` : 'Nicht angegeben'}
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                   <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }}/> 
                   **Ortsteil:** {user.district || 'Nicht angegeben'}
              </Typography>
              <Typography variant="body1" gutterBottom>
                **E-Mail:** {user.email}
              </Typography>
          </Box>
          {/* Zeige optional Adresse nur wenn verifiziert oder zusätzliche Profildaten */}
          {/* 
          {user.address && ( 
              <Typography variant="body1" gutterBottom>
                **Adresse:** {user.address}
              </Typography>
          )}
          */}
          <Typography variant="body1" color="text.secondary" sx={{mt: 3, textAlign: 'left'}}>
              [Platzhalter für weitere Profilinformationen...]
          </Typography>
      </Paper>
    </Container>
  );
}

export default ProfilePage; 
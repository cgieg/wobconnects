import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Stack
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
// import EventNoteIcon from '@mui/icons-material/EventNote'; // EventNoteIcon is not used anymore

// Lokales Bild importieren (stellen Sie sicher, dass der Dateiname übereinstimmt)
import HomeImg from '../assets/images/wolfsburg-kraftwerk.jpg'; 

// const HomeImg = 'https://via.placeholder.com/600x350/5EBEC4/ffffff?text=Wolfsburg+Connect'; // Removed placeholder

function HomePage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{
          py: 8,
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
                wobconnects
              </Typography>
              <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 4 }}>
                Deine lokale Plattform für Nachbarschaftshilfe und Gemeinschaft
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button 
                  variant="contained"
                  color="secondary"
                  size="large"
                  component={RouterLink}
                  to="/registrieren"
                >
                  Jetzt registrieren
                </Button>
                <Button 
                  variant="outlined"
                  color="inherit"
                  size="large"
                  component={RouterLink}
                  to="/hilfe-hub"
                >
                  Hilfe anbieten
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper 
                elevation={6}
                sx={{
                  height: { xs: 250, md: 350 },
                  overflow: 'hidden',
                  borderRadius: 2
                }}
              >
                <CardMedia
                  component="img"
                  image={HomeImg}
                  alt="Wolfsburg Stadtansicht"
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
          Was bietet wobconnects?
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
          Unsere Plattform verbindet Bewohner und fördert nachbarschaftliche Unterstützung.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <HelpOutlineIcon color="primary" sx={{ fontSize: 60 }} />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3" textAlign="center">
                  Nachbarschaftshilfe
                </Typography>
                <Typography>
                  Biete Hilfe an oder finde Unterstützung in deiner Nachbarschaft - 
                  von Einkaufshilfen bis zu handwerklichen Tätigkeiten.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                <PeopleOutlineIcon color="primary" sx={{ fontSize: 60 }} />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3" textAlign="center">
                  Ressourcen teilen
                </Typography>
                <Typography>
                  Teile oder leihe Werkzeuge, Bücher und andere Ressourcen mit 
                  Menschen in deiner Umgebung.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ backgroundColor: 'secondary.light', py: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
            Bereit, dich mit deiner Nachbarschaft zu verbinden?
          </Typography>
          <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
            Melde dich noch heute an und werde Teil unserer wachsenden Gemeinschaft in Wolfsburg.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              component={RouterLink}
              to="/registrieren"
            >
              Jetzt starten
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage; 
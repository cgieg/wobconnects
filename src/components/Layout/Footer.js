import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Link,
  Stack,
  Divider
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    { title: 'Über uns', path: '/ueber-uns' },
    { title: 'Kontakt', path: '/contact' },
    { title: 'Datenschutz', path: '/privacy' },
    { title: 'Nutzungsbedingungen', path: '/terms' },
    { title: 'Hilfe', path: '/help' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.mode === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              wobconnects
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Deine lokale Plattform für nachbarschaftliche Hilfe und Austausch in Wolfsburg.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Links
            </Typography>
            <Stack direction="column" spacing={1}>
              {footerLinks.map((link) => (
                <Link 
                  key={link.title}
                  component={RouterLink} 
                  to={link.path}
                  color="text.secondary"
                  underline="hover"
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Kontakt
            </Typography>
            <Box>
              <Typography variant="body2">Wolfsburg</Typography>
              <Typography variant="body2">Deutschland</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Email: info@wobconnects.de
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} wobconnects. Alle Rechte vorbehalten.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Made with ❤️ in Wolfsburg
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Alert
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Einfache Validierung
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setError('Bitte füllen Sie alle Felder aus.');
        setSubmitted(false);
        return;
    }
    setError('');
    console.log("Kontaktdaten gesendet (Dummy):", formData);
    // Hier würde normalerweise die Logik zum Senden der E-Mail/Nachricht implementiert werden
    setSubmitted(true);
    // Optional: Formular zurücksetzen
    // setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Kontaktieren Sie uns
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary" sx={{ mb: 3 }}>
          Wir freuen uns auf Ihre Nachricht!
        </Typography>

        <Grid container spacing={4}>
          {/* Kontaktdaten */}
          <Grid item xs={12} md={5}>
            <Typography variant="h6" gutterBottom>Direkter Kontakt</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body1">info@wobconnects.de</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <PhoneIcon sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body1">+49 (0) 123 456789</Typography>
            </Box>
            <Typography variant="body1" paragraph sx={{ mt: 2 }}>
              Sie können uns auch über das nebenstehende Formular erreichen. 
              Wir bemühen uns, Ihre Anfragen zeitnah zu beantworten.
            </Typography>
          </Grid>

          {/* Kontaktformular */}
          <Grid item xs={12} md={7}>
            <Typography variant="h6" gutterBottom>Kontaktformular</Typography>
            {submitted ? (
              <Alert severity="success">Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.</Alert>
            ) : (
              <Box component="form" onSubmit={handleSubmit} noValidate>
                {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  id="name"
                  name="name"
                  label="Ihr Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  id="email"
                  name="email"
                  label="Ihre E-Mail-Adresse"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  id="subject"
                  name="subject"
                  label="Betreff"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  id="message"
                  name="message"
                  label="Ihre Nachricht"
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  sx={{ mt: 2 }}
                >
                  Nachricht senden
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default ContactPage; 
import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  Link,
  Grid,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Konstante für Ortsteile
const wolfsburgDistricts = [
  'Nordstadt', 'Mitte-West', 'Stadtmitte', 'Detmerode', 'Westhagen', 
  'Almke', 'Barnstorf', 'Brackstedt', 'Ehmen', 'Fallersleben', 
  'Hattorf', 'Hehlingen', 'Heiligendorf', 'Kästorf', 'Mörse', 
  'Neindorf', 'Neuhaus', 'Nordsteimke', 'Reislingen', 'Sandkamp', 
  'Sülfeld', 'Velstove', 'Vorsfelde', 'Warmenau', 'Wendschott'
];

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    district: '',
    agreeToTerms: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      return setError('Die Passwörter stimmen nicht überein.');
    }
    
    if (!formData.agreeToTerms) {
      return setError('Bitte stimmen Sie den Nutzungsbedingungen zu.');
    }

    if (!formData.dateOfBirth) {
        return setError('Bitte geben Sie Ihr Geburtsdatum an.');
    }

    if (!formData.district) {
        return setError('Bitte wählen Sie Ihren Ortsteil aus.');
    }
    
    try {
      setError('');
      setLoading(true);
      
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        dateOfBirth: formData.dateOfBirth,
        district: formData.district,
      };

      const success = await register(userData);

      if (success) {
         navigate('/welcome');
      } else {
          setError('Registrierung fehlgeschlagen. E-Mail möglicherweise bereits vergeben?');
      }

    } catch (err) {
      setError('Registrierung fehlgeschlagen. Bitte versuchen Sie es erneut.');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Registrieren bei wobconnects
        </Typography>
        
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 3 }}>
          Werden Sie Teil unserer Nachbarschaftsgemeinschaft
        </Typography>
        
        {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}
        
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="firstName"
                label="Vorname"
                name="firstName"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Nachname"
                name="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="E-Mail-Adresse"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Passwort"
                type="password"
                id="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Passwort bestätigen"
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    id="dateOfBirth"
                    label="Geburtsdatum"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl required fullWidth>
                    <InputLabel id="district-label">Ortsteil</InputLabel>
                    <Select
                        labelId="district-label"
                        id="district"
                        name="district"
                        value={formData.district}
                        label="Ortsteil"
                        onChange={handleSelectChange}
                    >
                        <MenuItem value="" disabled>
                            *Bitte auswählen*
                        </MenuItem>
                        {wolfsburgDistricts.map((districtName) => (
                            <MenuItem key={districtName} value={districtName}>
                                {districtName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox 
                    name="agreeToTerms" 
                    color="primary" 
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                  />
                }
                label="Ich stimme den Nutzungsbedingungen und der Datenschutzerklärung zu."
              />
            </Grid>
          </Grid>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? 'Lädt...' : 'Registrieren'}
          </Button>
          
          <Box sx={{ textAlign: 'center' }}>
            <Link component={RouterLink} to="/login" variant="body2">
              Bereits ein Konto? Jetzt anmelden
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default RegisterPage; 
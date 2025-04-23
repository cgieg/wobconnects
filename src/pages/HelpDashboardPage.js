import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Grid, Alert } from '@mui/material';
import { getHelpRequests, getHelpOffers } from '../services/api';
import HelpItemCard from '../components/Help/HelpItemCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
// Importiere Komponenten (später erstellen)
// import HelpRequestForm from '../components/Help/HelpRequestForm';
// import HelpOfferForm from '../components/Help/HelpOfferForm';
// import HelpItemCard from '../components/Help/HelpItemCard';

function HelpDashboardPage() {
  // State für Hilfegesuche und Angebote
  const [requests, setRequests] = useState([]);
  const [offers, setOffers] = useState([]);
  
  // Loading States
  const [isLoadingRequests, setIsLoadingRequests] = useState(true);
  const [isLoadingOffers, setIsLoadingOffers] = useState(true);
  
  // Error States
  const [errorRequests, setErrorRequests] = useState(null);
  const [errorOffers, setErrorOffers] = useState(null);

  // Lade Hilfegesuche
  useEffect(() => {
    setIsLoadingRequests(true);
    setErrorRequests(null);
    
    getHelpRequests()
      .then(response => {
        if (response.success) {
          setRequests(response.requests);
        } else {
          setErrorRequests(response.message || 'Fehler beim Laden der Hilfegesuche');
        }
      })
      .catch(err => {
        console.error('Error fetching help requests:', err);
        setErrorRequests('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
      })
      .finally(() => {
        setIsLoadingRequests(false);
      });
  }, []);

  // Lade Hilfsangebote
  useEffect(() => {
    setIsLoadingOffers(true);
    setErrorOffers(null);
    
    getHelpOffers()
      .then(response => {
        if (response.success) {
          setOffers(response.offers);
        } else {
          setErrorOffers(response.message || 'Fehler beim Laden der Hilfsangebote');
        }
      })
      .catch(err => {
        console.error('Error fetching help offers:', err);
        setErrorOffers('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
      })
      .finally(() => {
        setIsLoadingOffers(false);
      });
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Helfende Hände - Der Hilfe-Hub
      </Typography>

      {/* Buttons zum Erstellen (später mit Modals oder separaten Seiten verknüpfen) */}
      <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
        <Button variant="contained" color="primary">Ich suche Hilfe</Button>
        <Button variant="contained" color="secondary">Ich biete Hilfe an</Button>
      </Box>

      {/* Platzhalter für Formulare (evtl. in Modals) */}
      {/* <HelpRequestForm /> */}
      {/* <HelpOfferForm /> */}

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h2" gutterBottom>
            Aktuelle Hilfegesuche
          </Typography>
          
          {/* Bereich für Hilfegesuche mit Lade-/Fehlerzuständen */}
          {isLoadingRequests ? (
            <LoadingSpinner message="Hilfegesuche werden geladen..." />
          ) : errorRequests ? (
            <Alert severity="error">{errorRequests}</Alert>
          ) : requests.length === 0 ? (
            <Typography variant="body1" color="text.secondary">Keine Hilfegesuche vorhanden.</Typography>
          ) : (
            <Box>
              {requests.map(request => (
                <HelpItemCard 
                  key={request.id} 
                  item={request} 
                  itemType="request" 
                />
              ))}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h2" gutterBottom>
            Aktuelle Hilfsangebote
          </Typography>
          
          {/* Bereich für Hilfsangebote mit Lade-/Fehlerzuständen */}
          {isLoadingOffers ? (
            <LoadingSpinner message="Hilfsangebote werden geladen..." />
          ) : errorOffers ? (
            <Alert severity="error">{errorOffers}</Alert>
          ) : offers.length === 0 ? (
            <Typography variant="body1" color="text.secondary">Keine Hilfsangebote vorhanden.</Typography>
          ) : (
            <Box>
              {offers.map(offer => (
                <HelpItemCard 
                  key={offer.id} 
                  item={offer} 
                  itemType="offer" 
                />
              ))}
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default HelpDashboardPage; 
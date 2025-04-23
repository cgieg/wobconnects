import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Grid, Alert } from '@mui/material';
import { getAvailableResources } from '../services/api';
import ResourceItemCard from '../components/Resource/ResourceItemCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
// Importiere Komponenten (später erstellen)
// import LendItemForm from '../components/Resource/LendItemForm';
// import GiftItemForm from '../components/Resource/GiftItemForm';
// import ResourceItemCard from '../components/Resource/ResourceItemCard';

function ResourceSharingPage() {
  // State für alle Ressourcen
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Lade Ressourcen beim Mounten der Komponente
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    
    getAvailableResources()
      .then(response => {
        if (response.success) {
          // Filter direkt hier, da wir nur 'lend' brauchen
          setResources(response.resources.filter(item => item.type === 'lend'));
        } else {
          setError(response.message || 'Fehler beim Laden der Ressourcen');
        }
      })
      .catch(err => {
        console.error('Error fetching resources:', err);
        setError('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // Gelöscht: Filterung nach Typ
  // const lendItems = resources.filter(item => item.type === 'lend'); 
  // const giftItems = resources.filter(item => item.type === 'gift');

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Leih-Ecke 
      </Typography>

       {/* Button zum Erstellen */}
       <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
         <Button variant="contained" color="primary">Gegenstand verleihen</Button>
         {/* Gelöscht: Button für Verschenken */}
       </Box>

       {/* Platzhalter für Formulare */}
       {/* <LendItemForm /> */}
       {/* Gelöscht: GiftItemForm Platzhalter */}

      {/* Anzeige von Fehlern auf Seitenebene */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>
      )}

      {/* Anzeige des Ladezustands */}
      {isLoading ? (
        <LoadingSpinner message="Ressourcen werden geladen..." />
      ) : (
        // Grid container nur für Leihartikel
        <Grid container spacing={3}>
          <Grid item xs={12}> 
            <Typography variant="h5" component="h2" gutterBottom>
              Verleih-Angebote
            </Typography>
            
            {/* Leihartikel */}
            {resources.length === 0 ? ( // Direkt resources verwenden
              <Typography variant="body1" color="text.secondary">Keine Gegenstände zum Verleih verfügbar.</Typography>
            ) : (
              <Box>
                {resources.map(item => ( // Direkt resources verwenden
                  <ResourceItemCard 
                    key={item.id} 
                    item={item} 
                    itemType="lend" 
                  />
                ))}\
              </Box>
            )}
          </Grid>
          {/* Gelöscht: Grid item für Schenkartikel */}
        </Grid>
      )}
    </Container>
  );
}

export default ResourceSharingPage; 
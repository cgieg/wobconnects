import React from 'react';
import { Card, CardContent, Typography, Button, Chip, Box, CardMedia } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category'; // Beispiel-Icon
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

// Nimmt ein 'resource' Objekt als Prop
function ResourceItemCard({ resource }) {
  if (!resource) return null;

  return (
    <Card sx={{ display: 'flex', mb: 2 }}>
      {/* Optional: Bild der Ressource */}
      {resource.imageUrl && (
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={resource.imageUrl}
          alt={resource.name}
        />
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {resource.name || 'Unbenannte Ressource'}
          </Typography>
          {resource.category && (
            <Chip 
              icon={<CategoryIcon fontSize="small" />} 
              label={resource.category}
              size="small" 
              sx={{ my: 0.5 }}
            />
          )}
          <Typography variant="caption" color="text.secondary" component="div">
            Angeboten von: {resource.owner || 'Unbekannt'}
          </Typography>
          <Chip 
            icon={resource.available ? <CheckCircleOutlineIcon /> : <HighlightOffIcon />}
            label={resource.available ? "Verfügbar" : "Verliehen"}
            color={resource.available ? "success" : "error"}
            size="small"
            sx={{ mt: 1.5, mb: 1 }}
          />
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1 }}>
          <Button size="small" variant="outlined">
            Anfragen
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default ResourceItemCard; 
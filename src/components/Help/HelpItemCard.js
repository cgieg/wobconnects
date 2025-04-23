import React from 'react';
import { Card, CardContent, Typography, Button, Chip, Box } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category'; // Beispiel-Icon

// Nimmt ein 'item' Objekt (Hilfsanfrage oder Angebot) als Prop
function HelpItemCard({ item }) {
  if (!item) return null;

  const isRequest = true; // Annahme: Ist eine Anfrage (oder ändern basierend auf item.type)

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {item.title || 'Unbenannter Eintrag'}
        </Typography>
        {item.category && (
          <Chip 
            icon={<CategoryIcon fontSize="small" />} 
            label={item.category}
            size="small" 
            sx={{ mb: 1.5 }}
          />
        )}
        <Typography variant="body2" color="text.secondary" paragraph>
          {item.description || 'Keine Beschreibung verfügbar.'}
        </Typography>
        <Typography variant="caption" display="block" color="text.secondary" sx={{ mb: 1.5 }}>
          {isRequest ? `Angefragt von: ${item.requester || 'Unbekannt'}` : `Angeboten von: ${item.provider || 'Unbekannt'}`}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button size="small" variant="outlined">
            Details anzeigen
          </Button>
          {/* Weitere Aktionen, z.B. "Helfen" oder "Annehmen" */}
        </Box>
      </CardContent>
    </Card>
  );
}

export default HelpItemCard; 
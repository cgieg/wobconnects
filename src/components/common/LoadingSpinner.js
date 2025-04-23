import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

// size: 'small', 'medium', 'large' oder eine Zahl für die Größe in px
// message: Optionaler Text, der unter dem Spinner angezeigt wird
function LoadingSpinner({ size = 'medium', message = null }) {
  const spinnerSizeMap = {
    small: 20,
    medium: 40,
    large: 60,
  };

  const spinnerSize = typeof size === 'number' ? size : spinnerSizeMap[size] || 40;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4, // Vertikaler Abstand
        width: '100%', // Volle Breite einnehmen
        height: '100%', // Volle Höhe (wenn im Container)
      }}
    >
      <CircularProgress size={spinnerSize} />
      {message && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
}

export default LoadingSpinner; 
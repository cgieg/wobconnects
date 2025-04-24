import { createTheme } from '@mui/material/styles';

// Definiere ein einfaches Theme für wobconnects
const theme = createTheme({
  palette: {
    primary: {
      main: '#5EBEC4', // Updated: Türkis/Cyan
      // light: '#...',
      // dark: '#...',
      // contrastText: '#ffffff', // Ggf. anpassen, je nach Lesbarkeit auf #5EBEC4
    },
    secondary: {
      main: '#F92C85', // Updated: Pink
      // light: '#...',
      // dark: '#...',
      // contrastText: '#ffffff', // Ggf. anpassen, je nach Lesbarkeit auf #F92C85
    },
    background: {
      default: '#FDF5DF', // Updated: Helles Beige/Creme
      paper: '#ffffff',
    },
    // Hier können weitere Anpassungen vorgenommen werden
    // z.B. typography, spacing, breakpoints, components overrides etc.
  },
  typography: {
    fontFamily: '\'Space Grotesk\', sans-serif', // Stelle sicher, dass Space Grotesk in index.html geladen wird
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    // Weitere Typographie-Einstellungen
  },
  // Weitere globale Theme-Einstellungen
});

export default theme; 
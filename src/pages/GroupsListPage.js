import React from 'react';
import { Container, Typography, Box, Button, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function GroupsListPage() {
  // Logik zum Laden der Gruppen
  // const [groups, setGroups] = useState([]);

  // Mock Daten
  const mockGroups = [
      { id: 'g1', name: 'Straßenfest-Komitee Musterstraße' },
      { id: 'g2', name: 'Gemeinschaftsgarten Initiative' }
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Aktions-Gruppen
      </Typography>
      <Button variant="contained" sx={{ mb: 2 }}>Neue Gruppe gründen</Button>

      {/* Hier Liste der Gruppen */}
      <List>
        {mockGroups.length > 0 ? mockGroups.map(group => (
          <ListItem
            key={group.id}
            button // Macht das Element klickbar
            component={RouterLink} // Verwendet React Router Link
            to={`/groups/${group.id}`} // Link zur Detailseite
          >
            <ListItemText primary={group.name} />
          </ListItem>
        )) : (
             <Typography variant="body1" color="text.secondary">[Keine Gruppen vorhanden oder Platzhalter]</Typography>
        )}
      </List>
    </Container>
  );
}

export default GroupsListPage; 
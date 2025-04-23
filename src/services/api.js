// src/services/api.js

// Platzhalter für API-Funktionen. Diese werden später implementiert.

// Beispiel: Authentifizierungs-API
export const loginUser = async (email, password) => {
  console.log('API Call: loginUser', { email, password });
  // Simuliere eine API-Antwort
  await new Promise(resolve => setTimeout(resolve, 500));
  if (email === 'test@example.com' && password === 'password') {
    return { success: true, user: { id: '1', name: 'Test User', email: 'test@example.com', isVerified: true } };
  } else {
    return { success: false, message: 'Invalid credentials' };
  }
};

export const registerUser = async (userData) => {
  console.log('API Call: registerUser', userData);
  await new Promise(resolve => setTimeout(resolve, 700));
  return { success: true }; // Einfache Erfolgsannahme
};

// Beispiel: Feed-API
export const getFeedPosts = async () => {
  console.log('API Call: getFeedPosts');
  await new Promise(resolve => setTimeout(resolve, 800));
  // Mock-Daten zurückgeben
  return [
    { id: 'p1', author: 'Nachbar A', content: 'Hat jemand eine Bohrmaschine zu verleihen?', timestamp: 'Vor 2 Stunden' },
    { id: 'p2', author: 'Nachbarin B', content: 'Ich biete Hilfe beim Einkaufen an.', timestamp: 'Gestern' },
  ];
};

export const createFeedPost = async (postData) => {
  console.log('API Call: createFeedPost', postData);
  await new Promise(resolve => setTimeout(resolve, 400));
  return { success: true, post: { ...postData, id: 'p' + Date.now(), timestamp: 'Gerade eben' } };
};

// Beispiel: Hilfe-Hub API
export const getHelpRequests = async () => {
  console.log('API Call: getHelpRequests');
  await new Promise(resolve => setTimeout(resolve, 600));
  return [
    { id: 'h1', title: 'Einkaufshilfe gesucht', description: 'Ich brauche Hilfe beim Einkaufen am Freitag.', category: 'Einkaufen', requester: 'Oma Erna' },
    { id: 'h2', title: 'Gartenarbeit', description: 'Wer kann mir beim Rasenmähen helfen?', category: 'Garten', requester: 'Herr Müller' },
  ];
};

export const getHelpOffers = async () => {
  console.log('API Call: getHelpOffers');
  await new Promise(resolve => setTimeout(resolve, 600));
  return [
    { id: 'ho1', title: 'Einkaufshilfe angeboten', description: 'Ich kann dienstags und freitags beim Einkaufen helfen.', category: 'Einkaufen', provider: 'Max Mustermann' },
    { id: 'ho2', title: 'Fahrdienst', description: 'Ich biete Fahrten zum Arzt oder zum Einkaufen an.', category: 'Transport', provider: 'Michaela Schmidt' },
  ];
};

// Beispiel: Ressourcen-API
export const getSharedResources = async () => {
  console.log('API Call: getSharedResources');
  await new Promise(resolve => setTimeout(resolve, 700));
  return [
    { id: 'r1', name: 'Bohrmaschine', category: 'Werkzeug', owner: 'Nachbar A', available: true },
    { id: 'r2', name: 'Leiter', category: 'Werkzeug', owner: 'Nachbarin B', available: false },
  ];
};

export const getAvailableResources = async () => {
  console.log('API Call: getAvailableResources');
  await new Promise(resolve => setTimeout(resolve, 700));
  return [
    { id: 'r1', name: 'Bohrmaschine', category: 'Werkzeug', owner: 'Nachbar A', available: true },
    { id: 'r3', name: 'Fahrradpumpe', category: 'Fahrrad', owner: 'Lisa', available: true },
    { id: 'r4', name: 'Großer Kochtopf', category: 'Küche', owner: 'Herr Becker', available: true },
  ];
};

// Fügen Sie hier weitere API-Funktionen hinzu (z.B. für Events, Profil, etc.) 
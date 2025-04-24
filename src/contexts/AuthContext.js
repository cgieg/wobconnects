// src/contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
// Annahme: Die API-Funktionen werden in Schritt 5 erstellt und hier importiert
// import { loginUser as apiLogin, registerUser as apiRegister } from '../services/api';

// 1. Context erstellen
const AuthContext = createContext(null);

// 2. Provider Komponente
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Kann später aus localStorage/sessionStorage initialisiert werden
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initial nicht authentifiziert
  const [loading, setLoading] = useState(true); // Ladezustand für Initialisierung

  // Mock Initialisierung (z.B. Prüfen ob User im localStorage ist)
  useEffect(() => {
    // Hier könnte eine Prüfung auf einen gespeicherten Token/User erfolgen
    // In einer echten App würde man hier versuchen, den User aus dem localStorage zu laden
    // const storedUser = localStorage.getItem('user');
    // if (storedUser) {
    //   setUser(JSON.parse(storedUser));
    //   setIsAuthenticated(true);
    // }
    // Simuliere eine kurze Ladezeit für die Initialisierung
    const timer = setTimeout(() => {
        setLoading(false); // Beende den Ladezustand nach der Prüfung/Simulation
    }, 50); // Kurze Verzögerung, um Ladezustand zu demonstrieren
    return () => clearTimeout(timer);
  }, []);

  // Mock Login Funktion
  const login = async (email, password) => {
    setLoading(true);
    console.log("Attempting login with:", email); // Logging für Debugging
    try {
        // Simulierter API Call - ersetze dies durch den echten Import, sobald api.js existiert
        // const response = await apiLogin(email, password);
        await new Promise(resolve => setTimeout(resolve, 500)); // Simuliere Netzwerk Latenz
        let response;
        if (email === 'test@example.com' && password === 'password') {
            response = { 
                success: true, 
                user: { 
                    id: '1', 
                    name: 'Test User', 
                    email: 'test@example.com', 
                    isVerified: true, 
                    dateOfBirth: '1990-05-15', // Beispiel-Datum
                    district: 'Stadtmitte' // Beispiel-Ortsteil
                }
            };
        } else if (email === 'nachbar@example.com' && password === 'password123') {
            response = { 
                success: true, 
                user: { 
                    id: '2', 
                    name: 'Nachbar B', 
                    email: 'nachbar@example.com', 
                    isVerified: false,
                    dateOfBirth: '1985-11-22', // Beispiel-Datum
                    district: 'Nordstadt' // Beispiel-Ortsteil
                }
            };
        } else {
            response = { success: false, message: 'Ungültige Anmeldedaten' };
        }


      if (response.success) {
        console.log("Login successful, setting user:", response.user);
        setUser(response.user);
        setIsAuthenticated(true);
        // Optional: User im localStorage speichern
        // localStorage.setItem('user', JSON.stringify(response.user));
        setLoading(false);
        return true;
      } else {
        console.log("Login failed:", response.message || "Invalid credentials");
        setLoading(false);
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
      return false;
    }
  };

  // Mock Logout Funktion
  const logout = () => {
    console.log("Logging out user");
    setUser(null);
    setIsAuthenticated(false);
    // Optional: User aus localStorage entfernen
    // localStorage.removeItem('user');
  };

  // Mock Register Funktion
  const register = async (userData) => {
     setLoading(true);
     console.log("Attempting registration with:", userData);
    try {
        // Simulierter API Call - ersetze dies durch den echten Import
        // const response = await apiRegister(userData);
         await new Promise(resolve => setTimeout(resolve, 700)); // Simuliere Netzwerk Latenz
         const response = { success: true }; // Einfache Erfolgsannahme für Mock

       if (response.success) {
         console.log("Registration successful");
         // In einer echten App würde man hier vielleicht automatisch einloggen
         // oder den User zur Login-Seite leiten.
         setLoading(false);
         return true;
       } else {
         console.log("Registration failed:", response.message || "Could not register");
         setLoading(false);
         return false;
       }
    } catch (error) {
        console.error("Registration error:", error);
        setLoading(false);
        return false;
    }
  };

   // Mock Verify Funktion (wird später von api.js aufgerufen)
   const verifyAddress = async (code) => {
       if (!user) return false;
       setLoading(true);
       console.log(`Attempting verification for user ${user.id} with code: ${code}`);
       try {
            // Simulierter API Call - ersetze dies durch den echten Import
            // const response = await apiVerifyUserAddress(user.id, code);
            await new Promise(resolve => setTimeout(resolve, 400));
            let response;
            // Mock-Logik: Funktioniert nur für Nachbar B mit richtigem (imaginären) Code
            if (user.id === '2' && code === '1234') { // Beispielcode
                response = { success: true, user: { ...user, isVerified: true } };
            } else {
                 response = { success: false, message: 'Ungültiger Code' };
            }

           if (response.success) {
               console.log("Verification successful, updating user:", response.user);
               setUser(response.user); // Aktualisiere den User-Status im Context
               setIsAuthenticated(true); // Bleibt true
               setLoading(false);
               return true;
           } else {
               console.log("Verification failed:", response.message);
               setLoading(false);
               return false;
           }
       } catch (error) {
           console.error("Verification error:", error);
           setLoading(false);
           return false;
       }
   };


  // Wert, der vom Provider bereitgestellt wird
  const value = {
    user,
    isAuthenticated,
    loading, // Ladezustand bereitstellen
    login,
    logout,
    register,
    verifyAddress, // Füge Verify-Funktion hinzu
    setUser, // Ggf. nützlich für Profilaktualisierungen
    setIsAuthenticated // Ggf. nützlich
  };

  // Provider rendert children, wenn der Context bereitgestellt wird
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom Hook für einfachen Zugriff
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined || context === null) { // Prüfe auch auf null
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 
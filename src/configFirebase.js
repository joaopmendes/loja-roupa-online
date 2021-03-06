import React, { useState, useEffect } from "react";
import firebase from "firebase";

const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuthProviders = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

const AuthContext = React.createContext({});

const AuthContextProvider = props => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(userFire => {
      if (userFire) setUser(userFire);
      else setUser(null);
    });
  }, []);
  return <AuthContext.Provider value={{ user }}>{props.children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };

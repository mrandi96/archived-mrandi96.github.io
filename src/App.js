import React from 'react';
import env from 'react-dotenv';
import { MainNavigation } from "./Navigations/MainNavigation";
import { initializeApp } from 'firebase/app';

function App() {
  const firebaseConfig = {
    apiKey: env.API_KEY,
    authDomain: env.AUTH_DOMAIN,
    projectId: env.PROJECT_ID,
    storageBucket: env.STORAGE_BUCKET,
    messagingSenderId: env.MESSAGING_SENDER_ID,
    appId: env.APP_ID
  };

  const firebaseApp = initializeApp(firebaseConfig);

  return <MainNavigation firebaseApp={firebaseApp} />;
}

export default App;

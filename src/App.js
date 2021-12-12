import React from 'react';
import { MainNavigation } from "./Navigations/MainNavigation";
import { initializeApp } from 'firebase/app';

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDv2N6jMpgd3v4o7YZuW7qRWxabKi6n7yU",
    authDomain: "github-pages-ac16a.firebaseapp.com",
    projectId: "github-pages-ac16a",
    storageBucket: "github-pages-ac16a.appspot.com",
    messagingSenderId: "784440320686",
    appId: "1=784440320686=web=9afcdd79c80d148548433f"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  return <MainNavigation firebaseApp={firebaseApp} />;
}

export default App;

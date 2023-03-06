import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./input.css";
import reportWebVitals from './reportWebVitals';
import { Button, ChakraProvider } from '@chakra-ui/react'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ChakraProvider>
      <App />
      </ChakraProvider>
   
  </React.StrictMode>
);

reportWebVitals();

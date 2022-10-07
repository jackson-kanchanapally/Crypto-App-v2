import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider,ColorModeScript} from '@chakra-ui/react'
import 'react-alice-carousel/lib/alice-carousel.css';
import CryptoContext from './CryptoContext'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <ColorModeScript initialColorMode='dark'>
    </ColorModeScript>
    <CryptoContext>
    <App/>
    </CryptoContext>
    </ChakraProvider>
  </React.StrictMode>
);


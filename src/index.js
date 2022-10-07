import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider,ColorModeScript} from '@chakra-ui/react'
import CryptoContext from './CryptoContext'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <ColorModeScript initialColorMode='light'>
    </ColorModeScript>
    <CryptoContext>
    <App/>
    </CryptoContext>
    </ChakraProvider>
  </React.StrictMode>
);


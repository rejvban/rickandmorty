import React from 'react';
import { render } from 'react-dom';
import App from './App';

// Apollo imports
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';

// Theme imports
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { GlobalStyle } from './theme/GlobalStyle';

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

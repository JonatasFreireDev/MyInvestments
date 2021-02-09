import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';
import { Colors } from './styles/theme';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Colors}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

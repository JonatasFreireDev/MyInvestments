import React from 'react';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import GlobalStyle from './styles/global';
import { Colors } from './styles/theme';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Colors}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

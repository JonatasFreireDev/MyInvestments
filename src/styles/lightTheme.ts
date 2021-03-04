import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  theme: {
    mainTheme: '#451A0A',
    secondTheme: '#EAEAEA',
  },
  button: {
    primaryColor: '#C48942',
  },
  input: {
    normal: 'grey',
    active: '#C48942',
    error: 'red',
    success: 'green',
  },
  icon: {
    white: '#fff',
    grey: 'grey',
    black: '#000',
  },
  text: {
    white: '#fff',
    black: '#000',
  },
};

export { lightTheme };

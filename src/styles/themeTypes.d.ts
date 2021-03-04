import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: {
      mainTheme: string;
      secondTheme: string;
    };
    button: {
      primaryColor: string;
    };
    input: {
      normal: string;
      active: string;
      error: string;
      success: string;
    };
    icon: {
      white: string;
      grey: string;
      black: string;
    };
    text: {
      white: string;
      black: string;
    };
  }
}

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
        --background: #F8E5D6;
        --font-title: #834825;
        --button: #834825;
        --color-link: #804627;
        
    }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;   
  }

  body {
    background: var(--background);
  }

 
`;

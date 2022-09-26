import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  
  button {
    border: 0 none;
    cursor: pointer;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  input {
    outline: 0 none;
    border: 0 none;
  }

  ${({ theme }: any) => css`
    body {
      font-size: 1.6rem;
      font-family: 'Poppins', sans-serif;
      background-color: ${theme.colors.white};
    }
  `}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 800;
  }

  a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }
    
`;

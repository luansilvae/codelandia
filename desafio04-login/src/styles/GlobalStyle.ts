import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --green: #04c35c;
    --blue: #2b6cb0;

    --white: #ffffff;
    --white300: #f7fafc;

    --dark: #1a202c;
    --input: #e8e8e8;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 720px) {
      font-size: 58.5%;
    }
    @media (max-width: 480px) {
      font-size: 54.5%;
    }
  }

  body {
    font-size: 1.6rem;
    font-family: 'Lato', sans-serif;
    background-color: var(--white);
    color: var(--dark);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: 'Merriweather', sans-serif;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  button,
  input {
    border: 0;
    outline: 0;
  }
  button:focus,
  input:focus {
    border: 0;
  }

`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;

  @media (min-width: 768px) {
    font-size: 64.5%;
  }
  @media (min-width: 1024px) {
    font-size: 68.5%;
  }
}

:root {
  --white: #ECE8E1;
  --red: #FF4655;
  --black: #111111;
  --dark: #0F1923
}

html {
  scroll-behavior: smooth;
}

h1, h2, h3 h3 {
  font-family: 'Teko', sans-serif;
}

span, button, a, p {
  font-family: 'Roboto', sans-serif;
}

li,
a {
  list-style: none;
  text-decoration: none;
}

body {
  background: var(--white);
}
`;

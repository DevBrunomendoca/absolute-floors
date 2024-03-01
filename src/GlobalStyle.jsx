import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
:root {
  --primary-color: #BF9C75;
  --second-color: #FEFEFF;
  --third-color: #1F1F1F;
  --fouth-color: #FFECD1;
}
html {
  font-size: 62.5%;
}
body {
  background-color: var(--primary-color );
}
`
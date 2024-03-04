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

.swiper-button-prev {
  position: relative !important;
  top: 22px;
  left: 0;
}
.swiper-button-next {
  position: relative !important;
  top: 0;
  left: 50px;
}
.swiper-button-prev, .swiper-button-next  {
  color: var(--primary-color);
  background-color: var(--fouth-color);
  border: none;
  padding: 0rem 2rem !important;
  border-radius: 50%;
}
.swiper-button-prev::after, .swiper-button-next::after {

font-size: 2.5rem !important;
font-weight: 600;
}
`
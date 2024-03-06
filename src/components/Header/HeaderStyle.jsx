import styled, { css } from "styled-components";

export const ContainerHeader = styled.header`
width: 100%;
position: fixed;
top: 0;
padding: 1rem;
background-color: transparent;
z-index: 101;
transition: ease-in-out .3s;
display: flex;
align-items: center;
${({onScrollY}) => onScrollY && css`
background-color: rgba(254, 254, 254, .9);
`}



`
export const Navigation = styled.nav`
margin: 0 auto;
max-width: 1280px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
z-index: 101;
div {
  display: flex;
  gap: 1.2rem;
}
div > a > img {
  width: 24px;
  cursor: pointer;
}
ul, div {
  @media (max-width:800px) {
    
    display: none;
  }
}
`

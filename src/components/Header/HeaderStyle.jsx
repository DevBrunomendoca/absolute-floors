import styled from "styled-components";

export const ContainerHeader = styled.header`
width: 100%;
position: fixed;
top: 0;
padding: 1rem;
background-color: transparent;
z-index: 101;
`
export const Navigation = styled.nav`
margin: 0 auto;
max-width: 1280px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
div {
  display: flex;
  gap: 1.2rem;
}
div > a > img {
  width: 24px;
  cursor: pointer;
}
`


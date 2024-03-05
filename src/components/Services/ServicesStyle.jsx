import styled from "styled-components"

export const ContainerServices = styled.section`
  background-color: var(--second-color);
  width: 100%;
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContainerTextServices = styled.div`
display: flex;
flex-direction: column;
max-width: 1000px;

h2 {
  color: var(--primary-color);
}
p {
  color: var(--third-color);
  text-align: center;
  margin-top: 4rem;
}
`
export const ContainerCardsServices = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 3rem 2rem;
margin-top: 6rem;
`

export const ContainerBannerServices = styled.div`

display: flex;
gap: 3.6rem;
padding: 6rem 0;
width: 100%;
margin: 0 auto;
max-width: 1280px;
div {
  padding: 0;
  cursor: pointer;
  position: relative;
}
img {
  transition: all .5s;
  scale: 1;
  border-radius: 5px;
}
img:hover {
  scale: 1.12;
  filter: brightness(40%);
}
`


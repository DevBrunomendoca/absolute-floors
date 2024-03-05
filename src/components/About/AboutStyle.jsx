import styled from "styled-components";

export const ContainerAbout = styled.section`
margin: 0 auto;
max-width: 1280px;
padding: 7rem 1rem;
display: flex;
align-items: center;
gap: 2rem;
@media (max-width:860px){
  flex-direction: column;
}
@media (max-width:600px){
  padding: 4rem 1rem;
}

`

export const ContentTextAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
  gap: 3rem;
  h2, p{
    text-align: start;
  }
  @media (max-width:860px){
    width: 100%;
    align-items: center;
    h2, p{
    text-align: center;
  }
}

`

export const ContainerCarousel = styled.div`
width: 50%;
@media (max-width:860px){
    width: 80%;
}
`

export const ContentCarouselAbout = styled.div`
img {
  width: 100%;
}
`
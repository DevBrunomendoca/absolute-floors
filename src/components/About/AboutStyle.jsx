import styled from "styled-components";

export const ContainerAbout = styled.section`
margin: 0 auto;
max-width: 1280px;
padding: 7rem 1rem;
display: flex;
align-items: center;
gap: 2rem;

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
`

export const ContainerCarousel = styled.div`
width: 50%;
`

export const ContentCarouselAbout = styled.div`
img {
  width: 100%;
}
`
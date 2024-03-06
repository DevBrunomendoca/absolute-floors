import styled from 'styled-components'

export const ContainerHome = styled.section`
`

export const ContentHome = styled.div`
background-image: linear-gradient(180deg, rgba(31,31,31,0.2) 0%, rgba(173,139,111,0.3393732492997199) 79%, rgba(191,156,117,1) 100%);
width: 100%;
height: 801px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 3rem;
padding: 20rem 1rem 0;
position: absolute;
top: 0;
left: 0;
z-index: 100;
@media (max-width:550px) {
  height: 701px;

}

button {
  background-color: var(--primary-color);
  color: var(--second-color);
}
p{
  color: var(--second-color);
  text-align: center;
}
`

export const ConteinerBanner = styled.div`
  img{
    width: 100%;
    
    height:800px;
  object-fit:cover;
  @media (max-width:550px) {
  height: 700px;
}
}
`


export const Title = styled.h1`
  font-family: "Cormorant Garamond", serif;
  font-weight: 700;
  font-style: normal;
  color: var(--second-color);
  font-size: 7rem;
  text-align: center;
  line-height: 120%;
  max-width: 1280px;
  @media (max-width:1100px) {
    font-size: 6rem;
  }
  @media (max-width: 650px) {
    font-size: 5rem;
}
@media (max-width: 550px) {
    font-size: 4rem;
}
@media (max-width: 420px) {
    font-size: 3rem;
}

`
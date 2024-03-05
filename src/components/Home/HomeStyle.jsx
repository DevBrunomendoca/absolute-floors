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
padding-top: 20rem;
position: absolute;
top: 0;
left: 0;
z-index: 100;

button {
  background-color: var(--primary-color);
  color: var(--second-color);
}
p{
  color: var(--second-color);
}
`

export const ConteinerBanner = styled.div`
  img{
    width: 100%;
    
    height:800px;
  object-fit:cover;
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
`
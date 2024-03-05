import styled from 'styled-components'

export const ContainerWorks = styled.section`
margin: 0 auto;
max-width: 1280px;
padding: 6rem 0;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width:600px){
  padding: 4rem 1rem;
}

`

export const ContainerTextWorks = styled.div`
max-width: 1060px;
text-align: center;
p {
  margin-top: 1rem;
}
`

export const ContainerCarousel = styled.div`
width: 100%;
padding: 6rem 1rem 1rem;
`

export const ContentCard = styled.div`
img{ 
  border-radius:5px;
  width: 100%;
}
`
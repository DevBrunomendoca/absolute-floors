import styled from "styled-components";

export const ContainerTestmonials = styled.section`
background-color: var(--second-color);
padding: 6rem 1rem;
@media (max-width:600px){
  padding: 4rem 1rem;
}
h2{
  color: var(--primary-color);
  margin-bottom: .5rem;
}
`

export const ContainerTextTestimonials = styled.div``

export const ContainerCardTestmonials = styled.div`
margin: 0 auto;
max-width: 1280px;
padding: 6rem 0 1rem;
`

export const ContentCardTestmonials = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
background-color:var(--fouth-color);
padding: 2rem;
border-radius: 5px;
div{
  display: flex;
  align-items: center; 
  gap: 2rem;
}
img {
  width: 70px;
}
`

import styled from "styled-components";

export const ContainerFooter = styled.footer`
background-color:var(--second-color);
padding: 6rem  1rem 2rem;
display: flex;
flex-direction: column;
align-items: center;
gap: 6rem;
@media (max-width:600px){
  padding: 4rem 1rem 2rem;
}

h4{
  text-align: start;
}
ul {
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  @media (max-width:600px){
    align-items: center;
  }
}
ul > li > a{
  font-size: 1.8rem;
} 
`
export const ContentFooter = styled.div`
display: flex;
justify-content: center;
align-items: start;
gap: 12rem;
@media (max-width: 600px) {
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;
}
`

export const ContainerCities = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 2rem;
div{
  margin-bottom: 2rem;
}
@media (max-width: 600px) {
  align-items: center;
}

`
export const ContainerOurServices = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 2rem;
@media (max-width: 600px) {
  align-items: center;
  p{
  text-align: center;
}
}

`

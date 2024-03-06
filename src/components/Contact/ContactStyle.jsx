import styled from "styled-components";

export const ContainerContact = styled.section`
display:flex;
align-items: center;
gap: 2rem;
width: 100%;
margin: 0 auto;
max-width: 1280px;
padding: 4rem 1rem;
@media (max-width:800px) {
  flex-direction: column;
}
@media (max-width:600px){
  padding: 2rem 1rem;
}
`

export const ContainerTextContact = styled.div`
margin: 0 auto;
max-width: 1280px;
padding: 6rem 0;
width: 100%;
display:flex;
flex-direction: column;
gap: 2rem;
@media (max-width:600px){
  padding: 4rem 1rem;
}
h2{
  text-align: start;
}
div {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
div>img {
  width:30px !important;
}
`

export const ContainerFormContact = styled.div`
width: 100%;
display: flex;
flex-direction: column;
div:first-child {
  display: flex;
  column-gap: 2rem;
  @media (max-width:400px) {
    flex-direction: column;
  }
}

label {
  font-family: "Montserrat", serif;
  font-weight: 500;
  font-style: normal;
  color: var(--third-color);
  font-size: 2rem;
  text-align: start;
  line-height: 120%;
  @media (max-width:600px) {
    font-size: 1.8rem;
  }
}
`
export const ContentInput = styled.div`

display: flex;
flex-direction: column;
gap: .4rem;
width: 100%;
margin-top: 3rem;
input{
  padding:2rem 1rem;
  border-radius: 5px;
  border: none;
}
`
export const ContentTextArea = styled.div`
display: flex;
flex-direction: column;
gap: .4rem;
margin: 3rem 0;
textarea {
  padding:2rem 1rem;
  border-radius: 5px;
  border: none;
  resize: none;
} 
`
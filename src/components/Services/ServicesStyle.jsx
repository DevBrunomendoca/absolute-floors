import styled from "styled-components"

export const ContainerServices = styled.section`
  background-color: var(--second-color);
  width: 100%;
  padding: 6rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width:600px){
  padding: 4rem 1rem;
}
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
place-items: center;
gap: 3rem 2rem;
margin-top: 6rem;
@media (max-width:1300px){
  grid-template-columns: repeat(2, 1fr);
}
@media (max-width:860px){
  grid-template-columns: 1fr;
  gap: 1.5rem 2rem;
}
`
export const ContainerEpoxy = styled.div`
  //width: 100%;
  margin: 0 auto;
  max-width: 1280px;
  padding-top: 2rem;
  

  display: flex;
  align-items: center;

  img{
    width: 60%;
  }
  div{
    max-width:620px;
    //height: 400px;
    background-color: var(--fouth-color);
    text-align: center;
    padding: 1.8rem 2rem;
    //height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
    border-radius: 5px;
    h4{
      color: var(--primary-color);
}
  }
  @media (max-width:1100px) {
    flex-direction: column;
    align-items: center;
    div{
      width: 60% ;
      height: 100%;
    }
    @media (max-width:700px) {
      img, div{
        width:100%
      }
    }
  }
`

//export const ContentTextEpoxy = styled.div``

export const ContainerBannerServices = styled.div`

display: flex;
gap: 3.6rem;
padding: 6rem 0 1rem;
width: 100%;
margin: 0 auto;
max-width: 1280px;
@media (max-width:800px){
  flex-direction: column;
  gap: 0;
}
div {
  padding: 0;
  cursor: pointer;
  position: relative;
  @media (max-width:650px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }  
}

img {
  width: 100%;
  transition: all .5s;
  scale: 1;
  border-radius: 5px;
}
img:hover {
  scale: 1.12;
  filter: brightness(40%);
  @media (max-width:800px){
  scale: 1;
}
}
`


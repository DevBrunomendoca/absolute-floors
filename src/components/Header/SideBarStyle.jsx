import styled, { css } from "styled-components";

export const ContentSideBar = styled.nav`
display: none;
padding: 1rem;


  ${({sideBar}) => sideBar && css`
  background-color: var(--second-color);
  position: absolute;
  height: 300px;
  top: 0;
  left: 0;
  width: 100%;
  animation: showSideBar .4s;
  display: none ;
  ul {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 10rem;
    width: 100%;
    
  }
  li {
    width: 100%;
    border-bottom: 1px solid rgba(94, 94, 94, 0.5);
    padding-bottom: .5rem;
  }
  a {
    font-size: 1.8rem;
  }
  div>a>img{
    width: 35px;
    padding-right: 1rem;
  } 
  @media (max-width: 850px) {
    display: flex ;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }

@keyframes showSideBar {
    from {
      opacity: 0;
      height: 230px;
    }
    to{
      opacity: 1;
      height: 300px;
    }
  } 
  
  `}

`
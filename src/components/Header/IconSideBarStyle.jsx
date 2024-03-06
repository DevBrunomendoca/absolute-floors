import styled, { css } from 'styled-components'

export const ContentIcon = styled.div`
display: none;
z-index: 101;
div {
  width: 32px;
  height: 3px;
  background-color: var(--third-color);
  margin-top: 4px;
}

${({close}) => close && css`
div {
    transition: all.5s;
    position: relative;
    top: 7px;
    left: 15px;
  } 
.line-one {
  transform: rotate(-45deg) translate(-8px, -8px);
}
.line-two {
  opacity: 0;
}
.line-three {
  transform: rotate(45deg) translate(-17px, -2px);
}
`}

@media (max-width:800px) {
  display: flex;
  align-items: end;
  flex-direction:column;
  .line-two {
  width: 20px
}
}

`
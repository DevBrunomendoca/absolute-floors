import styled from "styled-components";

export const ContentButton = styled.button`
  padding: 1rem 8rem;
  background-color: var(--second-color);
  color: var(--primary-color);
  font-family: "Cormorant Garamond", serif;
  font-size: 2rem;
  font-weight: 300;
  font-style: normal;
  border-radius: 5px;
  border: 2px solid transparent;
  cursor: pointer;
  @media (max-width: 650px) {
    font-size: 1.8rem;
}
`
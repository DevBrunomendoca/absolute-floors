import styled from 'styled-components'

export const ContentParagraph = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  color: var(--third-color);
  line-height: 150%;
  @media (max-width: 650px) {
    font-size: 1.6rem;
}
@media (max-width: 500px) {
    font-size: 1.5rem;
}
`
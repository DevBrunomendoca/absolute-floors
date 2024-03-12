import { ContentLinks } from "./LinksStyle"

const Link = ({LinksTitle, hrefLinks}) => {
  return(
  <ContentLinks href={hrefLinks}>{LinksTitle}</ContentLinks>
)
}

export default Link
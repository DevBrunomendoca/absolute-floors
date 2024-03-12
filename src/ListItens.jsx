import Link from "./Links"
import { ContainerListItens } from "./ListItenStyle"

const ListItens = ({onClick}) => {
  return(
    <ContainerListItens onClick={onClick}>
      <li><Link hrefLinks='#content-home' LinksTitle="Home"/></li>
      <li><Link hrefLinks='#container-service' LinksTitle="Services"/></li>
      <li><Link hrefLinks='#container-work' LinksTitle="Our Work"/></li>
      <li><Link hrefLinks='#container-contact' LinksTitle="Contact Us"/></li>
    </ContainerListItens>
  )
}

export default ListItens
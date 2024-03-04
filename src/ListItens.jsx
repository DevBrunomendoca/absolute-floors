import Link from "./Links"
import { ContainerListItens } from "./ListItenStyle"

const ListItens = () => {
  return(
    <ContainerListItens>
      <li><Link LinksTitle="Home"/></li>
      <li><Link LinksTitle="Services"/></li>
      <li><Link LinksTitle="Our Work"/></li>
      <li><Link LinksTitle="Contact Us"/></li>
    </ContainerListItens>
  )
}

export default ListItens
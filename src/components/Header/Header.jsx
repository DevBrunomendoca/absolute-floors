import ListItens from "../../ListItens"
import Logo from "../../Logo"
import { ContainerHeader, Navigation } from "./HeaderStyle"

const Header = () => {
  return(
    <ContainerHeader>
      <Navigation>
        <Logo />
        <ListItens />
        <div>
          <a href=""><img src="/whatsapp.png" alt="" /></a>
          <a href=""><img src="/instagram.png" alt="" /></a>
        </div>
      </Navigation>
    </ContainerHeader>
  )
}

export default Header
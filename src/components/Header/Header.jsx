import { useEffect, useState } from "react"
import ListItens from "../../ListItens"
import Logo from "../../Logo"
import { ContainerHeader, Navigation } from "./HeaderStyle"

const Header = () => {

  const [onScrollY, setOnScrollY] = useState(false)

  useEffect(() => {
    function positionScrollY() {
      window.scrollY > 100
      ? setOnScrollY(true)
      : setOnScrollY(false)
    }
    window.addEventListener('scroll', positionScrollY)
    return() => {
      window.removeEventListener('scroll', positionScrollY)
    }
  },[])

  return(
    <ContainerHeader onScrollY={onScrollY}>
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
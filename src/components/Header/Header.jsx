import { useEffect, useState } from "react"
import ListItens from "../../ListItens"
import Logo from "../../Logo"
import { ContainerHeader, Navigation } from "./HeaderStyle"
import IconSideBar from "./IconSideBar"
import SideBar from "./SideBar"

const Header = () => {
  const [onScrollY, setOnScrollY] = useState(false)
  const [sideBar , setSideBar] = useState(false)

  const toggleSideBar = () => setSideBar(!sideBar)

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
    <ContainerHeader sideBar={sideBar} onScrollY={onScrollY}>
      <Navigation>
        <Logo />
        <ListItens />
        <div>
          <a href=""><img src="/whatsapp.png" alt="" /></a>
          <a href=""><img src="/instagram.png" alt="" /></a>
        </div>
      </Navigation>
      <IconSideBar sideBar={sideBar} onClick={toggleSideBar}/>
      {sideBar && <SideBar sideBar={sideBar} setSideBar={setSideBar} />}
      
    </ContainerHeader>
  )
}

export default Header
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
          <a target='_blank' href="https://wa.me/17703553943?text=Thank+you+for+contacting+Absolut+Floors.+Please+let+us+know+how+we+can+help+and+we+will+get+back+to+you."><img src="/icone-whatsapp.png" alt="Icone Whatsapp" /></a>
          <a target='_blank' href="https://www.instagram.com/absolutfloors?igsh=MWx6eWphOXVmMm1u"><img src="/icone-instagram.png" alt="Icone Instagram" /></a>
          <a target='_blank' href="mailto:Absolutfloors@outlook.com"><img src="/icone-email.png" alt="Icone Email" /></a>
        </div>
      </Navigation>
      <IconSideBar sideBar={sideBar} onClick={toggleSideBar}/>
      {sideBar && <SideBar sideBar={sideBar} setSideBar={setSideBar} />}
      
    </ContainerHeader>
  )
}

export default Header
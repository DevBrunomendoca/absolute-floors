import { useEffect, useState } from "react"
import ListItens from "../../ListItens"
import { ContentSideBar } from "./SideBarStyle"

const SideBar = ({sideBar, setSideBar}) => {

  const closeSideBar = () => setSideBar(!sideBar) 

  useEffect(() => {
  function closeSideBarWidth() {
    window.innerWidth >= 801 
    && setSideBar(false)
  }
  closeSideBarWidth()  
  window.addEventListener('resize', closeSideBarWidth)
  return() => {
    window.removeEventListener('resize', closeSideBarWidth)
  }
  },[])

  return(
    <ContentSideBar sideBar={sideBar}>
      {sideBar && 
        <>
        <ListItens onClick={closeSideBar} />
        <div>
          <a target='_blank' href="https://wa.me/17703553943?text=Thank+you+for+contacting+Absolut+Floors.+Please+let+us+know+how+we+can+help+and+we+will+get+back+to+you."><img src="/icone-whatsapp.png" alt="Icone Whatsapp" /></a>
          <a target='_blank' href="https://www.instagram.com/absolutfloors?igsh=MWx6eWphOXVmMm1u"><img src="/icone-instagram.png" alt="Icone Instagram" /></a>
          <a target='_blank' href="mailto:Absolutfloors@outlook.com"><img src="/icone-email.png" alt="Icone Email" /></a>
        </div>
        </>
      }
    </ContentSideBar>
  )
}

export default SideBar
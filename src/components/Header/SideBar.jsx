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
          <a href=""><img src="/icone-whatsapp.png" alt="" /></a>
          <a href=""><img src="/icone-instagram.png" alt="" /></a>
          <a href=""><img src="/icone-email.png" alt="" /></a>
        </div>
        </>
      }
    </ContentSideBar>
  )
}

export default SideBar
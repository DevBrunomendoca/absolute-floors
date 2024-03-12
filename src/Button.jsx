import { ContentButton } from "./ButtonStyle"

const Button = ({textButton, href}) => {
  return(
    <a href={href}> 
    
    <ContentButton>{textButton}</ContentButton>
    </a>
  )
}

export default Button
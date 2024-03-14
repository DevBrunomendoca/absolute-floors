import { ContentButton } from "./ButtonStyle"

const Button = ({textButton, href, type}) => {
  return(
    <a href={href}> 
    
    <ContentButton type={type}>{textButton}</ContentButton>
    </a>
  )
}

export default Button
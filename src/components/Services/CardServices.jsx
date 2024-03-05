import { ContentParagraph } from "../../ParagraphStyle"
import { ContentTitleCard } from "../../TitleCardStyle"
import { ContainerCard } from "./CardServicesStyle"

const CardsServices = ({title, description, id}) => {
  return(
    <ContainerCard id={id}>
    <ContentTitleCard>{title}</ContentTitleCard>
      <ContentParagraph>{description}</ContentParagraph>
    </ContainerCard>
  )
}

export default CardsServices 
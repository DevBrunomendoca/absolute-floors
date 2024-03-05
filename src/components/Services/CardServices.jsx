import { ContentParagraph } from "../../ParagraphStyle"
import { ContentTitleCard } from "../../TitleCardStyle"
import { ContainerCard } from "./CardServicesStyle"

const CardsServices = ({title, description}) => {
  return(
    <ContainerCard>
    <ContentTitleCard>{title}</ContentTitleCard>
      <ContentParagraph>{description}</ContentParagraph>
    </ContainerCard>
  )
}

export default CardsServices 
import ListItens from "../../ListItens";
import Logo from "../../Logo";
import Paragraph from "../../Paragraph";
import TitleCard from "../../TitleCard";
import {
	ContainerCities,
	ContainerFooter,
	ContainerOurServices,
  ContentFooter,
} from "./FooterStyle";

const Footer = () => {
	return (
		<ContainerFooter>
      <ContentFooter>
			<ContainerCities>
				<TitleCard textTitleCard="Cities We Serve" />
				<div>
					<Paragraph textParagraph="Woodstok" />
					<Paragraph textParagraph="Marietta" />
					<Paragraph textParagraph="Atlanta" />
					<Paragraph textParagraph="Acworth" />
				</div>
				<Logo />
			</ContainerCities>

			<ContainerOurServices>
        <TitleCard textTitleCard='Our Services'/>
        <div>
          <Paragraph textParagraph='Hardwood Flor Installation'/>
          <Paragraph textParagraph='Hardwood Floor Refinishing'/>
          <Paragraph textParagraph='Hardwood Floor Polishing'/>
          <Paragraph textParagraph='Iron Baluster Installation'/>
          <Paragraph textParagraph='Cleaning Hardwood Floors'/>
          <Paragraph textParagraph='Oak Flooring'/>
          <Paragraph textParagraph='Hardwood'/>
          <Paragraph textParagraph='Laminate Flooring'/>
          <Paragraph textParagraph='Tile Flooring'/>
          <Paragraph textParagraph='Carpeting'/>
        </div>
      </ContainerOurServices>
      <ListItens />
      </ContentFooter>
      <Paragraph textParagraph='Copyright © - Dlack Tecnologia - Todos os direitos reservados'/>
		</ContainerFooter>
	);
};

export default Footer;

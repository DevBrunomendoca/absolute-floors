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
					<Paragraph textParagraph="Kennesaw" />
					<Paragraph textParagraph="Smyrna" />
					<Paragraph textParagraph="Powder Springs" />
					<Paragraph textParagraph="Alpharetta" />
				</div>
				<Logo />
			</ContainerCities>

			<ContainerOurServices>
        <TitleCard textTitleCard='Our Services'/>
        <div>
          <Paragraph textParagraph='Hardwood Floor Installation'/>
          <Paragraph textParagraph='Hardwood Floor Refinishing'/>
          <Paragraph textParagraph='Iron Baluster'/>
          <Paragraph textParagraph='Cleaning Hardwood Floor'/>
          <Paragraph textParagraph='Laminate Flooring'/>
          <Paragraph textParagraph='Luxury Vinyl Plank'/>
          <Paragraph textParagraph='Tile'/>
          <Paragraph textParagraph='Carpet'/>
          <Paragraph textParagraph='Staircase'/>
        </div>
      </ContainerOurServices>
      <ListItens />
      </ContentFooter>
      <Paragraph textParagraph='Copyright © - Dlack Tecnologia - Todos os direitos reservados'/>
		</ContainerFooter>
	);
};

export default Footer;

import Paragraph from "../../Paragraph";
import SecondTitle from "../../SecondTitle";
import Subtitle from "../../Subtile";
import CardsServices from "./CardServices";
import {
	ContainerBannerServices,
	ContainerCardsServices,
	ContainerServices,
	ContainerTextServices,
} from "./ServicesStyle";

const Service = () => {
	return (
		<ContainerServices>
			<ContainerTextServices>
				<SecondTitle textSecondTitle="Our Services" />
				<Subtitle textSubtitle="Everything you need" />
				<Paragraph textParagraph="We're dedicated to transforming spaces with precision and expertise. Explore our specialized services, from efficient demolition to flawless installations and expert wood refinishing. Discover how we can elevate your space with a touch of quality and innovation." />
			</ContainerTextServices>
			<ContainerCardsServices>
        <CardsServices 
          title='Floor Demolition' 
          description='Efficient and secure floor demolitions, paving the way for new possibilities.'
        />
        <CardsServices 
          title='Floor Installation' 
          description='Experts in precise floor installations for a flawless and enduring look.'
        />
        <CardsServices 
          title='Wood Floor Refinishing' 
          description='Specialized in extending the lifespan of wood floors through skilled refinement.'
          />
        <CardsServices 
          title='Laminate Floors' 
          description='Versatile laminate floors, offering modern solutions with a blend of aesthetics and functionality.'
        />
        <CardsServices 
          title='Vinyl Plank Flooring ' 
          description='Classic elegance of interlocking wood floors, adding a touch of tradition to any space.'
        />
        <CardsServices 
          title='Self-Leveling Floors' 
          description='Experience seamless surfaces with our self-leveling floors. Achieve a perfectly even and smooth finish, also to prepare the new floor to be installed.'
        />
      </ContainerCardsServices>
			<ContainerBannerServices>
        <div>
          <img src="banner-absolute-service(1).png" alt="" />
        </div>
        <div>
          <img src="banner-absolute-service(2).png" alt="" />
        </div>
      </ContainerBannerServices>
		</ContainerServices>
	);
}; 

export default Service;

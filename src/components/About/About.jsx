import Button from "../../Button";
import Paragraph from "../../Paragraph";
import Subtitle from "../../Subtile";
import {
	ContainerAbout,
	ContainerCarousel,
	ContentCarouselAbout,
	ContentTextAbout,
} from "./AboutStyle";

import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import SecondTitle from "../../SecondTitle";

const About = () => {
	const data = [
		{ id: "1", imgUrl: "/imagem-absolute-about(1).png" },
		{ id: "2", imgUrl: "/imagem-absolute-about(2).png" },
		{ id: "3", imgUrl: "/imagem-absolute-about(3).png" },
		{ id: "4", imgUrl: "/imagem-absolute-about(4).png" },
	];

	return (
		<ContainerAbout>
			<ContentTextAbout>
				<SecondTitle textSecondTitle='Elevating quality and excellence in space transformation'/>
				{/* <Subtitle textSubtitle="Elevating quality and excellence in space transformation" /> */}
				<Paragraph textParagraph="From meticulous demolition and precise installations to the delicate craft of wood refinishing, we bring unparalleled quality and excellence to every project. Our passion for transforming spaces is evident in the stunning before-and-after transformations we create." />
				<Button textButton="Our Work" />
			</ContentTextAbout>
			<ContainerCarousel>
				<Swiper
					slidesPerView={1}
					//spaceBetween={30}
					loop={true}
					navigation={true}
					modules={[Navigation]}
					className="mySwiper"
				>
					{data.map((item) => (
						<SwiperSlide key={item.id}>
							<ContentCarouselAbout>
								<img src={item.imgUrl} alt="" />
							</ContentCarouselAbout>
						</SwiperSlide>
					))}
				</Swiper>
			</ContainerCarousel>
		</ContainerAbout>
	);
};

export default About;

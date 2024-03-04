import Button from "../../Button";
import Paragraph from "../../Paragraph";
import { ContainerHome, ConteinerBanner, ContentHome, Title } from "./HomeStyle";

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules';

const Home = () => {
	const data = [
		{ id: "1", imgUrl: "/banner-absolute-one.jpg" },
		{ id: "2", imgUrl: "/banner-absolute-two.jpg" },
		{ id: "3", imgUrl: "/banner-absolute-four.jpg" },
	];

	return (
		<ContainerHome>
			<Swiper
				effect={"fade"}
				modules={[EffectFade]}
				loop={true}
				speed={1000}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
			>

			{data.map((item) => (
        <SwiperSlide key={item.id}>
					<ConteinerBanner>
						<img src={item.imgUrl} alt={`banner{item.id}`} />
					</ConteinerBanner>
				</SwiperSlide>
			))}
      </Swiper>
			<ContentHome>
				<Title>TRANSFORMING SPACES WITHT QUALITY AND EXCELLENCE</Title>
				<Paragraph textParagraph="High-quality demolition, installations, and touch-ups in impressive transformations." />
				<Button textButton="Free Consulation" />
			</ContentHome>
		</ContainerHome>
	);
};

export default Home;

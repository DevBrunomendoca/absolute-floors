import Paragraph from "../../Paragraph";
import SecondTitle from "../../SecondTitle";
import {
	ContainerCarousel,
	ContainerTextWorks,
	ContainerWorks,
  ContentCard,
} from "./WorksStyle";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay} from 'swiper/modules';
import { useEffect, useState } from "react";

const Works = () => {

  const [sliderPerview, setSliderPerview] = useState(3)

  useEffect(() => {
    function handleResize() {
      window.innerWidth <= 500
      ? setSliderPerview(1)
      : window.innerWidth <= 900
      ? setSliderPerview(2) 
      : setSliderPerview(3)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return() => {
      window.removeEventListener('reisze', handleResize)
    }
  }, [])

	const data = [
    { id: "1", imgUrl: "/carousel-absolute(1).png" },
    { id: "2", imgUrl: "/carousel-absolute(2).png" },
    { id: "3", imgUrl: "/carousel-absolute(3).png" },
    { id: "4", imgUrl: "/carousel-absolute(4).png" },
    { id: "5", imgUrl: "/carousel-absolute(5).png" },
    { id: "6", imgUrl: "/carousel-absolute(6).png" },
    { id: "7", imgUrl: "/carousel-absolute(7).png" }
  ];
	return (
		<ContainerWorks>
			<ContainerTextWorks>
				<SecondTitle textSecondTitle="Our Works" />
				<Paragraph textParagraph="Explore our gallery and discover excellence in every detail. From precise demolitions to flawless installations, each image tells the story of our passion for transforming spaces. Be inspired by the diversity and quality that define our unique approach." />
			</ContainerTextWorks>
			<ContainerCarousel>
				<Swiper
          loop={true}
          slidesPerView={sliderPerview}
					spaceBetween={30}
					centeredSlides={false}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					modules={[Autoplay]}
					className="mySwiper"
				>
					{data.map((item) => (
						<SwiperSlide key={item.id}> 
							<ContentCard>
                <img src={item.imgUrl} alt={item.id} />
              </ContentCard>
						</SwiperSlide>
					))}
				</Swiper>
			</ContainerCarousel>
		</ContainerWorks>
	);
};

export default Works;

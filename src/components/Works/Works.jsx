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
import { useEffect, useState, useLayoutEffect, useRef } from "react";

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Works = () => {

	const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#container-work",
          start: "120px bottom"
        }
      })
        .fromTo("#container-text-works", {
          opacity: 0,
          y: -80
        }, {
          opacity: 1,
          y: 0,
          duration: 1.5
        })
        .fromTo("#container-carousel-works", {
          opacity: 0,
          y: 100
        }, {
          opacity: 1,
          y: 0,
          duration: 1.5
        })
        
    })
    return () => {
      gsap.killTweensOf("#container-work")
    }
  }, [])

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
    { id: "7", imgUrl: "/carousel-absolute(7).png" },
    { id: "8", imgUrl: "/carousel-absolute(8).png" },
    { id: "9", imgUrl: "/image-epoxy.png" }

  ];
	return (
		<ContainerWorks id="container-work" rel="el">
			<ContainerTextWorks id="container-text-works">
				<SecondTitle textSecondTitle="Our Works" />
				<Paragraph textParagraph="Explore our gallery and discover excellence in every detail. From precise demolitions to flawless installations, each image tells the story of our passion for transforming spaces. Be inspired by the diversity and quality that define our unique approach." />
			</ContainerTextWorks>
			<ContainerCarousel id="container-carousel-works">
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

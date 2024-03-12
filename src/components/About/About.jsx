import Button from "../../Button";
import Paragraph from "../../Paragraph";
import {
	ContainerAbout,
	ContainerCarousel,
	ContentCarouselAbout,
	ContentTextAbout,
} from "./AboutStyle";

import { useLayoutEffect, useRef } from 'react'

import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import SecondTitle from "../../SecondTitle";

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const About = () => {
	const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#container-about",
          start: "250px bottom"
        }
      })
        .fromTo("#text-about", {
          opacity: 0,
          y: 160
        }, {
          opacity: 1,
          y: 0,
          duration: 1.5
        })
        .fromTo("#carousel-about", {
          opacity: 0,
          y: 160
        }, {
          opacity: 1,
          y: 0,
          duration: 1.5
        })
    })
    return () => {
      gsap.killTweensOf("#container-about")
    }
  }, [])

	const data = [
		{ id: "1", imgUrl: "/imagem-absolute-about(1).png" },
		{ id: "2", imgUrl: "/imagem-absolute-about(2).png" },
		{ id: "3", imgUrl: "/imagem-absolute-about(3).png" },
		{ id: "4", imgUrl: "/imagem-absolute-about(4).png" },
		{ id: "4", imgUrl: "/imagem-absolute-about(5).png" },
		{ id: "4", imgUrl: "/imagem-absolute-about(6).png" }
	];

	return (
		<ContainerAbout id="container-about" rel={el}>
			<ContentTextAbout id="text-about">
				<SecondTitle textSecondTitle='Elevating quality and excellence in space transformation'/>
				<Paragraph textParagraph="From meticulous demolition and precise installations to the delicate craft of wood refinishing, we bring unparalleled quality and excellence to every project. Our passion for transforming spaces is evident in the stunning before-and-after transformations we create." />
				<Button href="#container-work" textButton="Our Work" />
			</ContentTextAbout>
			<ContainerCarousel id="carousel-about">
				<Swiper
					slidesPerView={1}
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

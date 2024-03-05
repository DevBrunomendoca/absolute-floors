import Button from "../../Button";
import Paragraph from "../../Paragraph";
import { ContainerHome, ConteinerBanner, ContentHome, Title } from "./HomeStyle";

import { useLayoutEffect, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Home = () => {
	const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#container-home",
          start: "top bottom"
        }
      })

        .fromTo("#content-home", {
          opacity: 0,
          y: 160
        }, {
          opacity: 1,
          y: 0,
          duration: 1.5
        })
        
    })
    return () => {
      gsap.killTweensOf("#container-home")
    }
  }, [])
	const data = [
		{ id: "1", imgUrl: "/banner-absolute-one.jpg" },
		{ id: "2", imgUrl: "/banner-absolute-two.jpg" },
		{ id: "3", imgUrl: "/banner-absolute-three.jpeg" },
	];

	return (
		<ContainerHome id="container-home" rel={el}>
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
			<ContentHome id="content-home">
				<Title>TRANSFORMING SPACES WITHT QUALITY AND EXCELLENCE</Title>
				<Paragraph textParagraph="High-quality demolition, installations, and touch-ups in impressive transformations." />
				<Button textButton="Free Consulation" />
			</ContentHome>
		</ContainerHome>
	);
};

export default Home;

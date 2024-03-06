import { Swiper, SwiperSlide } from "swiper/react";
import SecondTitle from "../../SecondTitle";
import Subtitle from "../../Subtile";
import { ContentTitleCard } from "../../TitleCardStyle";
import { ContentParagraph } from "../../ParagraphStyle";
import {
  ContainerCardTestmonials,
	ContainerTestmonials,
	ContainerTextTestimonials,
	ContentCardTestmonials,
} from "./TesmonialsStyle";
import { Autoplay } from "swiper/modules";
import { useEffect, useState, useLayoutEffect, useRef  } from "react";

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Testmonials = () => {
	const [sliderPerview, setSliderPerview] = useState(2)

	const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#container-testimonial",
          start: "100px bottom"
        }
      })
        .fromTo("#container-text-testimonial", {
          opacity: 0,
          y: -80
        }, {
          opacity: 1,
          y: 0,
          duration: 1.2
        })
        .fromTo("#container-card-testimonial", {
          opacity: 0,
          y: 100
        }, {
          opacity: 1,
          y: 0,
          duration: 1.2
        })
        
    })
    return () => {
      gsap.killTweensOf("#container-testimonial")
    }
  }, [])

	useEffect(() => {
		function handleResize() {
			window.innerWidth < 800
			? setSliderPerview(1)
			: setSliderPerview(2)
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	},[])

	const data = [
		{
			id: "1",
			profile: "/profile(1).png",
			name: "Raiva Mughal",
			description:
				"We used Absolute Flooring in October 2023, to install wooden floors in our living room and hallway. All of their employees, the installers, were knowledgeable, patient and friendly! The installers did a great job and were very attentive. We also refinished the wooden floor in an adjacent bedroom and were very pleased with the result.",
		},

		{
			id: "2",
			profile: "/profile(2).png",
			name: "Andreza Pomerleau",
			description:
				"I recently had the pleasure of working with Absolute Floors Company to install hardwood floors in my home and I couldn't be happier with the experience. From start to finish, the Absolute Floors team demonstrated professionalism, experience and commitment to delivering the best results.",
		},

		{
			id: "3",
			profile: "/profile(3).png",
			name: "Andre B",
			description:
				"I would recommend Absolute flooring to anyone and everyone. I added some before and after photos, but they don't do the work justice. The team that installed my tile was respectful, detail-oriented, and always ensured that every aspect of the job was correct.",
		},
	];
	return (
		<ContainerTestmonials id="container-testimonial" rel={el}>
			<ContainerTextTestimonials id="container-text-testimonial">
				<SecondTitle textSecondTitle="What they talk about us" />
				<Subtitle textSubtitle="Check out some of our customer testimonials" />
			</ContainerTextTestimonials>
			<ContainerCardTestmonials id="container-card-testimonial">
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
							<ContentCardTestmonials>
								<div>
									<img src={item.profile} alt="" />
									<ContentTitleCard>{item.name}</ContentTitleCard>
								</div>
								<ContentParagraph>{item.description}</ContentParagraph>
							</ContentCardTestmonials>
						</SwiperSlide>
					))}
				</Swiper>
			</ContainerCardTestmonials>
		</ContainerTestmonials>
	);
};

export default Testmonials;

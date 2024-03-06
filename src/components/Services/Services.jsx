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

import { useLayoutEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Service = () => {

  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#container-service",
          start: "top bottom"
        }
      })
        .fromTo("#text-service", {
          opacity: 0,
          y: 160
        }, {
          opacity: 1,
          y: 0,
          duration: 1.5
        })
        .fromTo("#card-text1", {
          opacity: 0,
          x: -160
        }, {
          opacity: 1,
          x: 0,
          duration: 1.2
        })
        .fromTo("#card-text2", {
          opacity: 0,
          x: -160
        }, {
          opacity: 1,
          x: 0,
          duration: 1.2
        })
        .fromTo("#card-text3", {
          opacity: 0,
          x: -160
        }, {
          opacity: 1,
          x: 0,
          duration: 1.2
        })
        .fromTo("#card-text4", {
          opacity: 0,
          x: -160
        }, {
          opacity: 1,
          x: 0,
          duration: 1.2
        })
        .fromTo("#card-text5", {
          opacity: 0,
          x: -160
        }, {
          opacity: 1,
          x: 0,
          duration: 1.2
        })
        .fromTo("#card-text6", {
          opacity: 0,
          x: -160
        }, {
          opacity: 1,
          x: 0,
          duration: 1.2
        })
        .fromTo("#banner-service", {
          opacity: 0,
          y: -100
        }, {
          opacity: 1,
          y: 0,
          duration: 1.2
        })
        
    })
    return () => {
      gsap.killTweensOf("#container-service")
    }
  }, [])

	return (
		<ContainerServices id="container-service" rel={el}>
			<ContainerTextServices id="text-service">
				<SecondTitle textSecondTitle="Our Services" />
				<Subtitle textSubtitle="Everything you need" />
				<Paragraph textParagraph="We're dedicated to transforming spaces with precision and expertise. Explore our specialized services, from efficient demolition to flawless installations and expert wood refinishing. Discover how we can elevate your space with a touch of quality and innovation." />
			</ContainerTextServices>
			<ContainerCardsServices>
        <CardsServices 
          id='card-text1'
          title='Floor Demolition' 
          description='Efficient and secure floor demolitions, paving the way for new possibilities.'
        />
        <CardsServices 
          id='card-text2'
          title='Floor Installation' 
          description='Experts in precise floor installations for a flawless and enduring look.'
        />
        <CardsServices 
          id='card-text3'
          title='Wood Floor Refinishing' 
          description='Specialized in extending the lifespan of wood floors through skilled refinement.'
          />
        <CardsServices 
          id='card-text4'
          title='Laminate Floors' 
          description='Versatile laminate floors, offering modern solutions with a blend of aesthetics and functionality.'
        />
        <CardsServices 
          id='card-text5'
          title='Vinyl Plank Flooring ' 
          description='Classic elegance of interlocking wood floors, adding a touch of tradition to any space.'
        />
        <CardsServices 
          id='card-text6'
          title='Self-Leveling Floors' 
          description='Experience seamless surfaces with our self-leveling floors. Achieve a perfectly even and smooth finish, also to prepare the new floor to be installed.'
        />
      </ContainerCardsServices>
			<ContainerBannerServices id="banner-service"> 
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

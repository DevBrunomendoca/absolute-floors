import Button from "../../Button";
import Paragraph from "../../Paragraph";
import SecondTitle from "../../SecondTitle";
import {
	ContainerContact,
	ContainerFormContact,
	ContainerTextContact,
  ContentTextArea,
} from "./ContactStyle";
import Input from "./Form";

import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Contact = () => {

	const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: "#container-contact",
          start: "top bottom"
        }
      })

        .fromTo("#conteiner-text-contact", {
          opacity: 0,
          x: -160
        }, {
          opacity: 1,
          x: 0,
          duration: 1.5
        })
        .fromTo("#conteiner-form-contact", {
          opacity: 0,
          x: -160
        }, {
          opacity: 1,
          x: 0,
          duration: 1.5
        })
        
    })
    return () => {
      gsap.killTweensOf("#content-home")
    }
  }, [])


	return (
		<ContainerContact id="container-contact" rel={el}>
			<ContainerTextContact id="conteiner-text-contact">
				<SecondTitle textSecondTitle="Get Your Free In-Home Consultation" />
				<Paragraph textParagraph="Discover a hassle-free experience with us. Schedule your free consultation today and let us bring our expertise to your doorstep." />

				<div>
					<img src="/icon-building.png" alt="" />
					<Paragraph textParagraph="Kennesaw Ga 30152" />
				</div>
				<div>
					<img src="/icon-telephone.png" alt="" />
					<Paragraph textParagraph="(770) 355-3943" />
				</div>
				<div>
					<img src="/icon-email.png" alt="" />
					<Paragraph textParagraph="absolutfloors@outlook.com" />
				</div>
			</ContainerTextContact>
			<ContainerFormContact id="conteiner-form-contact">
				<div>
					<Input 
            type="text" 
            id="name" 
            name="name" 
            placeholder='Enter your Name here'
            label="Name" 
          />
					<Input
						type="text"
						id="last-name"
						name="last-name"
            placeholder='Enter your Last Name here'
						label="Last Name"
					/>
				</div>
        <Input 
          type='email'
          id='email'
          name='email'
          placeholder='Enter your Email here'
          label='Email'
        />
        <Input 
          type='phone'
          id='phone'
          name='phone'
          placeholder='Enter your Phone here'
          label='Phone Number'
        />
        <ContentTextArea>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your Message here"></textarea>
        </ContentTextArea>
      
        <Button textButton='Send Message'/>
			</ContainerFormContact>
    
		</ContainerContact>
	);
};

export default Contact;

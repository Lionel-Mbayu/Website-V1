import "./about.css";

import AboutImg from "../../assets/images/DSC08372 2.jpg";
import CV from "../../assets/cv/Lionel Mbayu - Resume.pdf";
import { Container } from "../shared";
import { FileIcon } from "../../assets/icons";
import Info from "./info";
import React from "react";

const About = () => {
	return (
		<section className='about section' id='about'>
			<h2 className='section__title'>About Me</h2>
			<span className='section__subtitle'>Introduction</span>
			<Container className='about__container grid'>
				<img src={AboutImg} alt='' className='about__img' />

				<div className='about__data'>
					<Info />

					<p className='about__description'>
						In 2022 I decided to take a risk and do a career switch. I have been in the healthcare space for the last 9 years,
						most recently as a Consultant. I have always been curious about software development and finally decided to make a
						change and do what felt rewarding. I spend most of my time on my computer on one development project or another
						these days. When not on my computer, I like to spend time with family and friends.
					</p>
					<a download='' href={CV} className='button button--flex'>
						<p>Resume</p>
						<FileIcon />
					</a>
				</div>
			</Container>
		</section>
	);
};

export default About;

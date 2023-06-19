import React from 'react';

import AboutImg from '../../assets/images/DSC08125 2.jpg';
import CV from '../../assets/cv/Lionel-Cv.pdf';
import Info from './info';
import { FileIcon } from '../../assets/icons';
import { Container } from '../shared';

import './about.css';

const About = () => {
	return (
		<section className='about section' id='about'>
			<h2 className='section__title'>About Me</h2>
			<span className='section__subtitle'>My introduction</span>
			<Container className='about__container grid'>
				<img src={AboutImg} alt='' className='about__img' />

				<div className='about__data'>
					<Info />

					<p className='about__description'>
						Frontend developer, I create web pages with UI / UX user interface,
						I have years of experience and many clients are happy with the
						projects carried out.
					</p>
					<a download='' href={CV} className='button button--flex'>
						<p>Download CV</p>
						<FileIcon />
					</a>
				</div>
			</Container>
		</section>
	);
};

export default About;

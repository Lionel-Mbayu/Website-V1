import React from "react";

const Info = () => {
	return (
		<div className='about__info grid'>
			<AboutContainer icon='bx-award'>
				<Title>Experience</Title>
				<Subtitle>2y as a Dev</Subtitle>
			</AboutContainer>

			<AboutContainer icon='bx-briefcase-alt'>
				<Title>Completed</Title>
				<Subtitle>100+ Dev Projects</Subtitle>
			</AboutContainer>

			<AboutContainer icon='bx-support'>
				<Title>Availability</Title>
				<Subtitle>Online 24/7</Subtitle>
			</AboutContainer>
		</div>
	);
};

const Title = ({ children }) => <h3 className='about__title'>{children}</h3>;
const Subtitle = ({ children }) => <span className='about__subtitle'>{children}</span>;
const AboutContainer = ({ children, icon }) => {
	return (
		<div className='about__box'>
			<i class={`bx ${icon} about__icon`}></i>

			{children}
		</div>
	);
};

export default Info;

import { Container } from '../shared';

export const Section = ({ children }) => {
	return <Container className='qualification__sections'>{children}</Container>;
};

export const Content = ({ children, activeTab, tabNumber }) => {
	return (
		<Container
			className={`qualification__content ${
				activeTab === tabNumber && 'qualification__content-active'
			}`}>
			{children}
		</Container>
	);
};

export const Data = ({ children }) => {
	return <Container className='qualification__data'>{children}</Container>;
};

export const Detail = ({ title, company, duration }) => {
	return (
		<div>
			<h3 className='qualification__title'>{title}</h3>
			<span className='qualification__subtitle'>{company}</span>
			<div className='qualification__calender'>
				<i className='uil uil-calender-alt'></i> <p>{duration}</p>
			</div>
		</div>
	);
};

export const Separator = () => {
	return (
		<div>
			<span className='qualification__rounder'></span>
			<span className='qualification__line'></span>
		</div>
	);
};

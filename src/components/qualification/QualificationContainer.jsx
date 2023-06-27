import { Container } from '../shared';

export const QualificationContainer = ({ children }) => {

	return <Container className="qualification__container">{ children }</Container>;
}


export const LineDot = () => {
	return (
		<div>
			<span className='qualification__rounder'></span>
			<span className='qualification__line'></span>
		</div>
	);
};

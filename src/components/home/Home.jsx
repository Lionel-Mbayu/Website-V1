import React from 'react';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import { Container } from '../shared';

import './home.css';

const Home = () => {
	return (
		<section className='home section' id='home'>
			<Container className='home__container grid'>
				<div className='home__content grid'>
					<Social />
					<div className='home__img'></div>
					<Data />
				</div>
				<ScrollDown />
			</Container>
		</section>
	);
};

export default Home;

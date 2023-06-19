import React from 'react';

import { MouseIcon } from '../../assets/icons';

const ScrollDown = () => {
	return (
		<div className='home__scroll'>
			<a
				href='#about'
				className='home__scroll-button 
            button--flex'>
				<MouseIcon />
				<span className='home__scroll-name'>Scroll Down</span>
				<i class='uil uil-arrow-down home__scroll-arrow'></i>
			</a>
		</div>
	);
};

export default ScrollDown;

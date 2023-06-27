import React from 'react';

import { SendIcon, HandIcon } from '../../assets/icons';

const Data = () => {
	return (
		<div className='home__data'>
			{/* ADDED: container around name and HandIcon */}

			<div className='name__container'>
				<h1 className='home__title'>Lionel Mbayu</h1>
				<HandIcon />
			</div>

			<h3 className='home__subtitle'>Full-Stack Software Engineer</h3>
			<p className='home__description'>
				I am a Software Developer based in Minneapolis. I am passionate about
				building innovative software solutions to create a better experience for
				the user.
			</p>

			<a href='#contact' className='button button--flex'>
				Say Hello
				<SendIcon />
			</a>
		</div>
	);
};

export default Data;

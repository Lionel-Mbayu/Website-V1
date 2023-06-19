import React from 'react';

import { SendIcon, HandIcon } from '../../assets/icons';

const Data = () => {
	return (
		<div className='home__data'>
			<h1 className='home__title'>
				Lionel Mbayu
				<HandIcon />
			</h1>
			<h3 className='home__subtitle'>Full-Stack Software Engineer</h3>
			<p className='home__description'>
				I'm a Software Developer based in Minneapolis, and I'm very passionate
				about software and dedicated to furthering my knowledge base.
			</p>

			<a href='#contact' className='button button--flex'>
				Say Hello
				<SendIcon />
			</a>
		</div>
	);
};

export default Data;

import React from 'react';

const Social = () => {
	return (
		<div className='home__social'>
			<a
				href='https://www.linkedin.com/in/lionel-mbayu/'
				className='home__social-icon'
				target='_blank'
				rel='noreferrer'>
				<i class='uil uil-linkedin-alt'></i>
			</a>
			<a
				href='https://github.com/BruvLio'
				className='home__social-icon'
				target='_blank'
				rel='noreferrer'>
				<i class='uil uil-github-alt'></i>
			</a>
			<a
				href='https://www.instagram.com/'
				className='home__social-icon'
				target='_blank'
				rel='noreferrer'>
				<i class='uil uil-instagram'></i>
			</a>
		</div>
	);
};

export default Social;

import React from 'react';

const Social = () => {
	return (
		<div className='home__social'>
			<SocialLink
				href='https://www.linkedin.com/in/lionel-mbayu/'
				icon='uil-linkedin-alt'
			/>

			<SocialLink href='https://github.com/BruvLio' icon='uil-github-alt' />

			<SocialLink href='https://www.instagram.com/' icon='uil-instagram' />
		</div>
	);
};

const SocialLink = ({ href, icon }) => {
	return (
		<a
			href={href}
			className='home__social-icon'
			target='_blank'
			rel='noreferrer'>
			<i class={`uil ${icon}`}></i>
		</a>
	);
};

export default Social;

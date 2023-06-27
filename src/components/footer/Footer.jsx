import React from 'react';
import './footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<h1 className='footer__title'>Thanks for stopping by... 💜</h1>

				<ul className='footer__list'>
					<li>
						<a href='#about' className='footer__link'>
							About
						</a>
					</li>

					<li>
						<a href='#portfolio' className='footer__link'>
							Projects
						</a>
					</li>

					{/* <li>
						<a href='#testimonials' className='footer__link'>
							Testimonials
						</a>
					</li> */}
				</ul>

				<div className='footer__social'>
					<a
						href='https://www.linkedin.com/in/lionel-mbayu/'
						className='home__social-icon'
						target='_blank'
						rel='noreferrer'>
						<i class='bx bxl-linkedin'></i>
					</a>
					<a
						href='https://github.com/Lionel-mbayu'
						className='home__social-icon'
						target='_blank'
						rel='noreferrer'>
						<i class='bx bxl-github'></i>
					</a>
					<a
						href='https://www.instagram.com/'
						className='home__social-icon'
						target='_blank'
						rel='noreferrer'>
						<i class='bx bxl-instagram'></i>
					</a>
				</div>

				<span className='footer__copy'>Curated by Lionel Mbayu</span>
				<div className='footer__copy2'>&#169; Crypticalcoder</div>
			</div>
		</footer>
	);
};

export default Footer;

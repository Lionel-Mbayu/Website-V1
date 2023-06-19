import React, { useState } from 'react';

import { Menu, NavList, NavIconLink, NavLink } from './NavList';

import './header.css';

const Header = () => {
	window.addEventListener('scroll', function () {
		const header = document.querySelector('.header');
		// when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
		if (this.scrollY >= 80) header.classList.add('show-header');
		else header.classList.remove('show-scroll');
	});
	/* ============ Toggle Menu ============*/

	const [toggle, showMenu] = useState(false);
	const [active, setActive] = useState('#home');

	return (
		<header className='header'>
			<nav className='nav container'>
				<NavLink href='index.html' className='nav__logo'>
					Lionel
				</NavLink>

				<Menu toggle={toggle}>
					<NavList>
						<NavIconLink
							href='#home'
							icon='uil-estate'
							active={active}
							setActive={setActive}>
							Home
						</NavIconLink>

						<NavIconLink
							href='#about'
							icon='uil-user'
							active={active}
							setActive={setActive}>
							About
						</NavIconLink>

						<NavIconLink
							href='#skills'
							icon='uil-file-alt'
							active={active}
							setActive={setActive}>
							Skills
						</NavIconLink>
						{/* 
						<NavIconLink
							href='#services'
							icon='uil-briefcase-alt'
							active={active}
							setActive={setActive}>
							Services
						</NavIconLink> */}

						{/* <NavIconLink
							href='#portfolio'
							icon='uil-scenery'
							active={active}
							setActive={setActive}>
							Portfolio
						</NavIconLink> */}

						<NavIconLink
							href='#contact'
							icon='uil-message'
							active={active}
							setActive={setActive}>
							Contact
						</NavIconLink>
					</NavList>

					<i
						class='uil uil-times nav__close'
						onClick={() => showMenu(!toggle)}
					/>
				</Menu>
				<div className='nav__toggle' onClick={() => showMenu(!toggle)}>
					<i class='uil uil-apps'></i>
				</div>
			</nav>
		</header>
	);
};

export default Header;

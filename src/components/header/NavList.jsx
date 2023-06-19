export const Menu = ({ children, toggle }) => {
	return (
		<div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
			<p>{children}</p>
		</div>
	);
};
export const NavList = ({ children }) => {
	return <ul className='nav__list grid'>{children}</ul>;
};

export const NavIconLink = ({ children, href, icon, active, setActive }) => {
	return (
		<li className='nav__item' onClick={() => setActive(href)}>
			<a
				href={href}
				className={`nav__link ${active === href && 'active-link'}`}>
				<i className={`uil ${icon} nav__icon`} />
				<p>{children}</p>
			</a>
		</li>
	);
};

export const NavLink = ({ children, href, className }) => {
	return (
		<a href={href} className={className}>
			<p>{children}</p>
		</a>
	);
};

export const TabsContainer = ({ children }) => {
	return <div className='qualification__tabs'>{children}</div>;
};

export const Tab = ({ children, icon, active, setActiveTab, tabNumber }) => {
	return (
		<div
			onClick={() => setActiveTab(tabNumber)}
			className={`qualification__button ${
				active === tabNumber && 'qualification__active'
			} button--flex`}>
			<i className={`uil ${icon} qualification__icon`}></i>
			<p> {children} </p>
		</div>
	);
};

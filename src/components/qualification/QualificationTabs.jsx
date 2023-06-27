export const TabsButtons = ({ children }) => {
	return <div className='qualification__tabs'>{children}</div>;
};

export const Tab = ({ children, icon, active, setActiveTab, tabNumber }) => {
	return (
		<div
			onClick={() => setActiveTab(tabNumber)}
			className={`qualification__button ${
				active === tabNumber && 'qualification__active'
			} button--flex`}>
			<i className={`uil ${ icon } qualification__icon`}></i>
			<p> { children } </p>
		</div>
	);
};

export const TabBody = ({ children }) => {
	return <div className='qualification__sections'>{ children }</div>;
};

export const TabContent = ({ children, activeTab, contentNumber }) => {
	return (
		<div
			className={`qualification__content ${
				activeTab === contentNumber && 'qualification__content-active'
			}`}>
			{children}
		</div>
	);
};

export const TabData = ({ children }) => {
	return <div className='qualification__data'>{children}</div>;
};

export const TabDetail = ({ title, company, duration }) => {

    return(
        <div>
            <h3 className='qualification__title'>{ title }</h3>
            <span className='qualification__subtitle'>{ company }</span>
            <div className='qualification__calendar'>
                <i className='uil uil-calendar-alt'></i> <p>{ duration }</p>
            </div>
        </div>

    )
}
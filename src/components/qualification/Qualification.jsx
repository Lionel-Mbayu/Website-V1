import "./qualification.css";

import { LineDot, QualificationContainer } from "./QualificationContainer";
import React, { useState } from "react";
import { Tab, TabBody, TabContent, TabData, TabDetail, TabsButtons } from "./QualificationTabs";

const Qualification = () => {
	const [activeTab, setActiveTab] = useState(2);

	return (
		<section className='qualification section'>
			<div className='title__container'>
				<h2 className='section__title'>Qualification</h2>
				<span className='section__subtitle'>My personal journey</span>
			</div>

			<QualificationContainer>
				<TabsButtons>
					<Tab icon='uil-graduation-cap' active={activeTab} setActiveTab={setActiveTab} tabNumber={1}>
						Education
					</Tab>

					<Tab icon='uil-briefcase-alt' active={activeTab} setActiveTab={setActiveTab} tabNumber={2}>
						Experience
					</Tab>
				</TabsButtons>

				<TabBody>
					<TabContent activeTab={activeTab} contentNumber={1}>
						<TabData>
							<TabDetail title='Bloom Institute of Technology' company='US' duration='2022 - 2023' />

							<LineDot />
						</TabData>
						{/* 
						<TabData>
							<div className='alignment' />
							<LineDot />

							<TabDetail
								title='Art Director'
								company='Spain - Institute'
								duration='2021 - 2021'
							/>
						</TabData> */}

						{/* <TabData>
							<TabDetail
								title='Web Developer'
								company='Spain - Institute'
								duration='2018 - 2020'
							/>
							<LineDot />
						</TabData> */}

						{/* <TabData>
							<div className='alignment' />
							<LineDot />
							<TabDetail
								title='UX Expert'
								company='Spain - Institute'
								duration='2017 - 2018'
							/>
						</TabData> */}
					</TabContent>

					<TabContent activeTab={activeTab} contentNumber={2}>
						<TabData>
							<div className='alignment' />
							<LineDot />
							<TabDetail title='Software Engineer' company='Longevity Holdings - US' duration='2024 - Present' />
						</TabData>
						<TabData>
							<TabDetail title='Full Stack Developer - Student' company='BloomTech - US' duration='2022 - 2023' />
							<LineDot />
						</TabData>
						<TabData>
							<div className='alignment' />
							<LineDot />
							<TabDetail title='Consultant' company='AON - US' duration='2020 - 2021' />
						</TabData>

						<TabData>
							<TabDetail title='Sr Account Analyst' company='Prime Therapeutics - US' duration='2019 - 2020' />
							<LineDot />
						</TabData>

						<TabData>
							<div className='alignment' />
							<LineDot />
							<TabDetail title='Sr Pricing Analyst' company='Prime Therapeutics - US' duration='2017 - 2018' />
						</TabData>
					</TabContent>
				</TabBody>
			</QualificationContainer>
		</section>
	);
};

export default Qualification;

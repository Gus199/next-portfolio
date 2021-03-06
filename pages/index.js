import React, { useState } from "react";
 import FadeUp from "../animations/FadeUp";
 import  Link  from "next/link";
 import { Fade } from "react-awesome-reveal";
 import projectData from "../content/content.js";

import featuredProjects from '../content/content.js'
 import Project from "../component/Project";
 import Contact from "../component/Contact";
 import Socials from "../component/Socials";
 //import CustomLink from "../component/CustomLink";
 import { Bounce } from "react-awesome-reveal";

const Home = () => {
	const [featuredProjects, setFeaturedProjects] = useState([
		projectData[0],
		projectData[1],
		projectData[2],
	]);

	return (
		<div className="main-container">
			<div className="inner-container">
				{/* <section className="section-1"> */}
				<div className="section-container">
				 <Socials />
					 <FadeUp
						duration={1000}
						triggerOnce={true}
						fraction={0}
						cascade={true}
						damping={0.1}
					>  
						<h1 className="section-title main-section-title">
							I'm Amar Ait-Gherbi
						</h1>
						<Bounce top delay={1000}> 
						<h2 className="sub-title">Front-end developer</h2>
						 </Bounce> 
						

						<div className="bio-with-image">
							{/* <img className="bio-img" src="./images/bio-amar-compress.png" alt="Amar"/> */}
							<p className="bio">
								I'm currently a freelance full stack developer with a wide range
								of skills and a passion for learning. I am mostly self-taught
								but I don't let it hold me back from reaching my potential as a
								creator on the web. When learning on my own became overwhelming,
								as it can in the ever-changing world of web development, I
								enrolled and graduated from a full stack bootcamp offered by
								University of Pennsylvania.
								<br></br>
								<br></br>
								My background is in finanace and accounting, specifically in the
								corporate real estate industry, which has given me invaluable
								experience as a professional. I am organized, work well on my
								own or with others, and enjoy solving problems.
								<br></br>
								<br></br>
								As a father and husband, I want to make my family proud. It's
								why I decided to take the road less traveled and build a new
								career in the first place. It's why I continue to grind every
								day to improve as a developer. I want to prove to myself and set
								an example for my son that at 30, it's not too late to re-invent
								yourself and find success in your passions.
								<br></br>
								<br></br>
								I'm currently available for{" "}
								<span className="accent-orange-text">
									freelance opportunities
								</span>
								, <span className="accent-orange-text">contract roles</span>, or{" "}
								<span className="accent-orange-text">full time positions</span>.
								Please reach out @ <span className="accent-orange-text">amaraitgherbi@gmail.com</span>, I would love to hear from you! 
							</p>
							
						</div>
					 </FadeUp> 
				</div>
				{/* </section> */}
				{/* <section className="section-2"> */}
				<div className="section-container">
					 <FadeUp
						duration={1000}
						triggerOnce={true}
						fraction={0}
						cascade={true}
						damping={0.1}
					> 
						<h1 className="section-title">
							I'm constantly adding to my toolbox of skills
						</h1>
						<div className="skills-container">
							<p className="skills-description">
								The modern web is always changing, so I am always learning. I
								enjoy fiddling with different tools across the web and finding
								the right fits for my development style, but I am also
								versatile. If a job is best served with a certain set of
								technologies, then I will make sure to take the time and dive
								deep when necessary.
								<br></br>
								<br></br>
								I'm currently teaching myself{" "}
								<span className="important-text">NextJs</span>,{" "}
								<span className="important-text">firbase</span>, and{" "}
								<span className="important-text">Cooming Soon</span>.
							</p>
							<div>
								<h3 className="what-im-good-at">What I'm good at</h3>
								<ul className="skill-list">
								 <Fade
										delay={1000}
										cascade={true}
										damping={0.25}
										triggerOnce
										direction="up"
										duration={500}
										fraction={0}
									> 
										<li className="pill">HTML</li>
										<li className="pill">CSS</li>
										<li className="pill">Javascript</li>
										<li className="pill">React</li>
										<li className="pill">React Transition Group</li>
										<li className="pill">React Router</li>
										<li className="pill">Mobile Design</li>
										<li className="pill">NodeJS</li>
										<li className="pill">MongoDB</li>
										<li className="pill">Heroku</li>
										<li className="pill">Express</li>
										<li className="pill">GraphQL</li>
										<li className="pill">Apollo Client</li>
									 </Fade> 
								</ul>
							</div>
						</div>
					 </FadeUp> 
				</div>
				{/* </section> */}
				{/* <section className="section-3"> */}
				<div className="section-container">
					 <FadeUp duration={1000} triggerOnce={true} fraction={0}> 
						<h1 className="section-title">Take a look at my featured work</h1>
					 </FadeUp> 
					<ul className="project-list">
					 <Fade
							triggerOnce={true}
							cascade={true}
							damping={0.1}
							direction="up"
							duration={500}
							fraction={0}
							delay={500}
						> 
							{featuredProjects.map((project, idx) => (
								<Project
									key={idx}
									imgSrc={project.imgSrc}
									alt={project.alt}
									title={project.title}
									description={project.description}
									stack={project.stack}
									liveLink={project.liveLink}
									codeLink={project.codeLink}
									isFeatured={project.isFeatured}
									featuredImgs={project.featuredImgs}
									featuredText1={project.featuredText1}
									featuredText2={project.featuredText2}
								/>
							))}
						 </Fade> 
					</ul>
					<div className="flex-center-container">
						 <Fade direction="up" delay={0} triggerOnce fraction={0}> 
							{/* <AttentionSeeker effect="tada" triggerOnce delay={0} fraction={0}> */}
							 <Link href="/work" >
							<a >	View all</a>
							</Link> 
							{/* <CustomLink to="/work" className="btn secondary">View all</CustomLink> */}

							{/* </AttentionSeeker> */}
						 </Fade> 
					</div>
				</div>
			 <Contact /> 
				{/* </section> */}
				{/* <section className="section-8"> */}

				{/* </section> */}
			</div>
		</div>
	);
};

export default Home;

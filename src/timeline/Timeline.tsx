import React from 'react';
import './Timeline.css';

function Timeline() {
	return (
		<div className='timeline mx-auto max-w-2xl lg:max-w-5xl'>
			<div className='container left-container'>
				<img
					className='border border-black'
					alt='Robin Pronnier'
					src={window.location.href + '/logos/doyield_logo.jpg'}
				/>
				<div className='text-box shadow-xl shadow-gray-500 border border-white'>
					<h1 className='text-xl'>Lead Developer & Project Manager</h1>
					<h2 className=' underline'>Doyield</h2>
					<small>2022 - 2024</small>

					<p className='text-xs'>
						I led the creation of a JS/TS environment to develop an internal Revenue Management System
						(RMS), overseeing every phase from conception to delivery. My role included:
						<ul className='list-disc mt-2'>
							<li>Researching and selecting the most suitable technologies.</li>
							<li>Implementing and adapting Agile methodology within the company.</li>
							<li>
								Managing a team as Project Manager, acting as the bridge between the client and
								developers.
							</li>
							<li>Ensuring reliable timelines and feature delivery.</li>
							<li>Designing a robust API using NodeJS / TypeScript with MongoDB.</li>
							<li>Developing an internal Business Intelligence with dynamic charts.</li>
							<li>Creating a pricing recommendation algorithm in Rust.</li>
							<li>Building a web architecture using VueJS / NuxtJS.</li>
							<li>Deploying the infrastructure on AWS, including Lambda management.</li>
							<li>Automating the generation of reports based on collected data.</li>
							<li>Implementing data scraping and manipulation scripts</li>
						</ul>
					</p>
					<span className='left-container-arrow'></span>
				</div>
			</div>

			<div className='container right-container'>
				<img
					className='border border-black'
					alt='Robin Pronnier'
					src={window.location.href + '/logos/capgemini_logo.jpg'}
				/>
				<div className='text-box shadow-xl shadow-gray-500'>
					<h1 className='text-xl'>DevOps Engineer</h1>
					<h2 className=' underline'>Capgemini</h2>
					<small>2021 - 2022</small>

					<p className='text-xs'>
						I was responsible for implementing key features using the ServiceNow platform to meet client
						needs. My role involved:
						<ul className='list-disc mt-2'>
							<li>Tracking and addressing various client requirements.</li>
							<li>Setting up a public API.</li>
							<li>Developing a real-time synchronization API between two SQL databases.</li>
							<li>Creating a Front-office Portal using AngularJS.</li>
						</ul>
					</p>
					<span className='right-container-arrow'></span>
				</div>
			</div>
			<div className='container left-container'>
				<img
					className='border border-black'
					alt='Robin Pronnier'
					src={window.location.href + '/logos/proposr_logo.jpg'}
				/>
				<div className='text-box shadow-xl shadow-gray-500'>
					<h1 className='text-xl'>Lead Developer & Project Manager</h1>
					<h2 className=' underline'>Proposr</h2>
					<small>2018 - 2021</small>

					<p className='text-xs'>
						I played a key role in the creation of Proposr, taking on both Lead Developer and Project
						Manager responsibilities. My role included:
						<ul className='list-disc mt-2'>
							<li>Researching and selecting the most suitable technologies for the project.</li>
							<li>Implementing and adapting Agile methodology within the company.</li>
							<li>Developing an API using NodeJS and setting up a MongoDB database.</li>
							<li>Building the website and back-office using VueJS / NuxtJS.</li>
							<li>Setting up hosting on AWS and managing various environments.</li>
							<li>Integrating a search system into the website using Algolia.</li>
							<li>Creating data scraping scripts with Python.</li>
						</ul>
					</p>
					<span className='left-container-arrow'></span>
				</div>
			</div>

			<div className='container right-container'>
				<img
					className='border border-black'
					alt='Robin Pronnier'
					src={window.location.href + '/logos/mext_logo.jpg'}
				/>
				<div className='text-box shadow-xl shadow-gray-500'>
					<h1 className='text-xl'>Back-end Developer</h1>
					<h2 className=' underline'>Mext</h2>
					<small>2020</small>

					<p className='text-xs'>
						I was responsible for developing the back-end of the website and back-office using NodeJS, with
						MySQL as the database. My role focused on:
						<ul className='list-disc mt-2'>
							<li>Building and optimizing the server-side architecture with NodeJS.</li>
							<li>Implementing and managing the MySQL database.</li>
						</ul>
					</p>
					<span className='right-container-arrow'></span>
				</div>
			</div>

			<div className='container left-container'>
				<img
					className='border border-black'
					alt='Robin Pronnier'
					src={window.location.href + '/logos/groov_logo.jpg'}
				/>
				<div className='text-box shadow-xl shadow-gray-500'>
					<h1 className='text-xl'>Flutter Developer</h1>
					<h2 className=' underline'>Groov</h2>
					<small>2020</small>

					<p className='text-xs'>
						I contributed to the development of new features in a Flutter application, focusing on enhancing
						user interaction and data integration. My work included:
						<ul className='list-disc mt-2'>
							<li>
								Retrieving and displaying information from the database by interacting with Firebase.
							</li>
							<li>
								Enabling real-time interaction with connected users by displaying their information.
							</li>
							<li>
								Integrating Google Maps and Google Places to retrieve and display location-based data.
							</li>
						</ul>
					</p>
					<span className='left-container-arrow'></span>
				</div>
			</div>

			<div className='container right-container'>
				<img
					className='border border-black'
					alt='Robin Pronnier'
					src={window.location.href + '/logos/wenow_logo.jpg'}
				/>
				<div className='text-box shadow-xl shadow-gray-500'>
					<h1 className='text-xl'>Full-Stack Developer</h1>
					<h2 className=' underline'>WeNow</h2>
					<small>2018 - 2019</small>

					<p className='text-xs'>
						I was responsible for developing a dashboard using Angular and adding server-side
						functionalities with PHP and MySQL. My contributions included:
						<ul className='list-disc mt-2'>
							<li>Developing a dynamic dashboard using Angular.</li>
							<li>Implementing new features on the server with PHP and MySQL.</li>
						</ul>
					</p>
					<span className='right-container-arrow'></span>
				</div>
			</div>
		</div>
	);
}

export default Timeline;

import './Header.css';
import CountUp from 'react-countup';

function Header() {
	return (
		<div className='items-center gap-2 mx-2 pt-6 mt-6 rounded-xl border border-neutral-800 textShine bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] lg:mx-auto max-w-2xl lg:max-w-5xl shadow-xl shadow-gray-500'>
			<div>
				<div className='relative px-4 sm:px-8 lg:px-12'>
					<div className=' gap-2 grid lg:grid-cols-3 items-center lg:text-justify'>
						<img
							className='rounded-full w-40 h-40'
							src={window.location.href + '/profile_picture.jpg'}
							alt='Robin Pronnier'
						/>

						<h1 className='col-span-2 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-white'>
							Lead Developer FullStack JS and Project Manager
						</h1>
					</div>
					<p className='mt-6 text-base text-zinc-600 dark:text-white text-justify'>
						Seeking a new opportunity following the conclusion of my mission at Doyield, I aim to steer my
						career towards project management and team leadership. With a strong technical background, I can
						easily apply methodologies such as Agile, assess each task, and oversee a team of developers
						while adapting to client requests. I am deeply committed to transparent communication,
						collaboration, and innovation. My goal is to bring ambitious ideas to life using appropriate
						technological solutions and rigorous project management.
					</p>
					<div className='mt-6 flex flex-nowrap gap-6  my-6 items-center justify-center '>
						<a
							className='group -m-1 p-1'
							aria-label='Follow on LinkedIn'
							href='https://www.linkedin.com/in/robin-pronnier/'
							target='_blank'
							rel='noreferrer'>
							<svg
								viewBox='0 0 24 24'
								aria-hidden='true'
								className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'>
								<path d='M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z'></path>
							</svg>
						</a>

						<a
							className='group -m-1 p-1'
							aria-label='Follow on Malt'
							href='https://www.malt.fr/profile/robinpronnier'
							target='_blank'
							rel='noreferrer'>
							<svg
								viewBox='0 0 512 512'
								aria-hidden='true'
								className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'>
								<path d='m408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8c34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4c-4.6-23.3-17.9-44.4-53.3-44.4c-35.4 0-48.7 21.2-53.2 44.5c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2c5 23.8 19 45.5 53.1 45.5c34.2 0 48.3-21.9 53.2-45.7c-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5c0 34.3 21.9 48.3 45.8 53.2c2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6c0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2c-25 25-19.4 49.4-6.2 69.1c4.1-.3 123.4-.6 123.4-.6zm68.7 165.9-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3c24.2-24.2 18.7-49.7 5.3-70c-4.3.3-123.2.6-123.2.6z'></path>
							</svg>
						</a>
						<a
							className='group -m-1 p-1'
							aria-label='Follow on GitHub'
							href='https://github.com/Robin-P'
							target='_blank'
							rel='noreferrer'>
							<svg
								viewBox='0 0 24 24'
								aria-hidden='true'
								className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z'></path>
							</svg>
						</a>

						<a
							href={window.location.href + '/CV Robin Pronnier.pdf'}
							className='group textColor inline-flex gap-1 items-center rounded-xl border border-neutral-800 text-sm px-2 py-2'
							download>
							<svg
								viewBox='0 0 16 16'
								fill='none'
								aria-hidden='true'
								className='group-hover:fill-zinc-600 h-5 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50'>
								<path
									d='M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'></path>
							</svg>{' '}
							<span>Download CV</span>
						</a>
					</div>
					<div>
						<div className='grid lg:grid-cols-3 gap-2 place-items-center mt-10 mb-4  text-zinc-800 dark:text-white'>
							<div className='flex flex-nowrap items-center gap-2'>
								<h2 className='text-4xl xl:text-6xl font-extrabold'>
									<CountUp start={0} end={5} duration={4}></CountUp>
								</h2>
								<p className='text-sm max-w-[100px]'>Years of experience</p>
							</div>
							<div className='flex flex-nowrap items-center gap-2'>
								<h2 className='text-4xl xl:text-6xl font-extrabold'>
									+<CountUp start={0} end={10} duration={4}></CountUp>
								</h2>
								<p className='text-sm max-w-[100px]'>Technologies mastered</p>
							</div>
							<div className='flex flex-nowrap items-center gap-2'>
								<h2 className='text-4xl xl:text-6xl font-extrabold'>
									+<CountUp start={0} end={500} duration={4}></CountUp>
								</h2>
								<p className='text-sm max-w-[100px]'>Commits</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;

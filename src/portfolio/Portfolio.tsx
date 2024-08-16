import { useState } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';

let slides = ['doyield_pickup.png', 'doyield_bi.png', 'proposr_agencies.png', 'proposr_detail.png'];

export default function Portfolio() {
	let [current, setCurrent] = useState(0);

	let previousSlide = () => {
		if (current === 0) setCurrent(slides.length - 1);
		else setCurrent(current - 1);
	};

	let nextSlide = () => {
		if (current === slides.length - 1) setCurrent(0);
		else setCurrent(current + 1);
	};

	return (
		<div>
			<div className='text-center text-3xl font-bold text-white'>Portfolio</div>
			<div className='my-6 overflow-hidden relative md:mx-auto mx-6 max-w-2xl lg:max-w-5xl rounded-xl'>
				<div
					className={`flex transition ease-out`}
					style={{
						transform: `translateX(-${current * 100}%)`
					}}>
					{slides.map(s => {
						return <img alt='Captures' src={window.location.href + '/captures/' + s} />;
					})}
				</div>

				<div className='absolute top-0 h-full w-full justify-between items-center flex px-10 text-3xl'>
					<button onClick={previousSlide}>
						<BsFillArrowLeftCircleFill />
					</button>
					<button onClick={nextSlide}>
						<BsFillArrowRightCircleFill />
					</button>
				</div>

				<div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
					{slides.map((s, i) => {
						return (
							<div
								onClick={() => {
									setCurrent(i);
								}}
								key={'circle' + i}
								className={`rounded-full w-5 h-5 cursor-pointer  ${
									i === current ? 'bg-white' : 'bg-gray-500'
								}`}></div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

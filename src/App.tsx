import React from 'react';
import './App.css';
import Header from './header/Header';
import Timeline from './timeline/Timeline';
import Portfolio from './portfolio/Portfolio';
import Skills from './skills/Skills';

function App() {
	return (
		<div>
			<Header />
			<Timeline />
			<Skills />
			<Portfolio />
		</div>
	);
}

export default App;

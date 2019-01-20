import React, { Component } from 'react';
import Comparitor from './components/Comparitor';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Comparitor />
				</header>
			</div>
		);
	}
}



export default App;

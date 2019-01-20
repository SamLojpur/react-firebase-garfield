import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ComicStrip extends Component {
	constructor(props) {
		super(props);
		this.state = {
			panelA: "./panels/1985-08-05a.gif",
			panelB: "./panels/1985-08-05b.gif",
			panelC: "./panels/1985-08-05c.gif"
		};
	}

	render() {
		return (
			<div className="reconComic">
				<img src={this.state.panelA} />
				<img src={this.state.panelB} />
				<img src={this.state.panelC} />
			</div>
		);
	}
}


class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					Which one is funnier??????
					<ComicStrip />
				</header>
			</div>
		);
	}
}



export default App;

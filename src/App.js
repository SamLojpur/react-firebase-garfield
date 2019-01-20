import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ComicStrip extends Component {
	constructor(props) {
		super(props);
		this.state = {
			panelA: "idfsdf",
			panelB: "",
			panelC: ""
		};
	}

	render() {
		return (
			<div className="reconComic">
				<div> 
					{this.props.panelA} 
				</div>
			</div>
		);
	}
}


class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					Which one is funnier?
					<ComicStrip />
				</header>
			</div>
		);
	}
}



export default App;

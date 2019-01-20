import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ComicStrip extends Component {
	constructor(props) {
		super(props);
		this.state = {
			urlA: "./panels/1985-08-05a.gif",
			urlB: "./panels/1985-08-05b.gif",
			urlC: "./panels/1985-08-05c.gif",
			idA: 1,
			idB: 2,
			idC: 3
		};
	}

	getPanelIds(){
		return([this.state.idA, this.state.idB, this.state.idC]);
	}
	
	render() {
		return (
			<div className="reconComic" onClick={this.handleClick}>
				<img className="panelImg" src={this.state.urlA} />
				<img className="panelImg" src={this.state.urlB} />
				<img className="panelImg" src={this.state.urlC} />
			</div>
		);
	}
}

class Comparitor extends Component {
	constructor(props) {
		super(props);
		this.stripA = React.createRef();
		this.stripB = React.createRef();
	}

	generate(){
		alert("Both strips will now update");
	}
	
	choose(choice) {
		var upVote, downVote;
		if (choice == 1){
			alert("you chose 1");
			upVote = this.stripA.current.getPanelIds();
			downVote = this.stripB.current.getPanelIds();
		} else {
			upVote = this.stripB.current.getPanelIds();
			downVote = this.stripA.current.getPanelIds();
			alert("you chose 2")
		}
		

		this.generate();
	}

	vote(type,ids){
		return 0;
	}

	render() {
		this.generate();
		return (
			<div>
				<div onClick={() => {this.choose(1)}}>
					<ComicStrip ref={this.stripA} />
				</div>
				Which is funnier?
				<div onClick={() => {this.choose(2)}}>
					<ComicStrip ref={this.stripB} />
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
					<Comparitor />
				</header>
			</div>
		);
	}
}



export default App;

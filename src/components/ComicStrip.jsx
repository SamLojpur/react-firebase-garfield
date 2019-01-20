import React, { Component } from 'react';

export default class ComicStrip extends Component {
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
				<img className="panelImg"  src={this.state.urlA} />
				<img className="panelImg" alt="panelB" src={this.state.urlB} />
				<img className="panelImg" alt="panelC" src={this.state.urlC} />
			</div>
		);
	}
}

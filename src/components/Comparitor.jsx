import React, { Component } from 'react';
import ComicStrip from './ComicStrip';

export default class Comparitor extends Component {
	constructor(props) {
		super(props);
		this.stripA = React.createRef();
		this.stripB = React.createRef();
	}

	componentDidMount(){
		this.generate();
	}

	generate(){
		/* axios.get(url).then( res => {
			this.stripA.current.setState();
			this.stripB.current.setState();
		}) */
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

		this.vote(1,upVote);
		this.vote(-1,downVote);

		this.generate();
	}

	vote(weight,ids){
		alert("add "+weight+" to panels: "+ids);
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

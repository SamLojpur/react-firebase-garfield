import React, { Component } from 'react';
import ComicStrip from './ComicStrip';
import axios from 'axios';

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
		var	url = 'https://us-central1-searchforthebestgarfieldcomic.cloudfunctions.net/getPanel'
		axios.get(url, { crossdomain: true }).then((res) => {
			this.stripA.current.setState(
				{urlA: "./panels/"+res.data[0].items, idA: res.data[0].id,
				 urlB: "./panels/"+res.data[1].items, idB: res.data[1].id,
				 urlC: "./panels/"+res.data[2].items, idC: res.data[2].id});
			this.stripB.current.setState(
				{urlA: "./panels/"+res.data[3].items, idA: res.data[3].id,
				 urlB: "./panels/"+res.data[4].items, idB: res.data[4].id,
				 urlC: "./panels/"+res.data[5].items, idC: res.data[5].id});
		});
	}
	
	choose(choice) {
		var upVote, downVote;
		if (choice === 1){
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

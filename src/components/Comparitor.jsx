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
		var upIds, downIds;
		if (choice === 1){
			upIds = this.stripA.current.getPanelIds();
			downIds = this.stripB.current.getPanelIds();
		} else {
			upIds = this.stripB.current.getPanelIds();
			downIds = this.stripA.current.getPanelIds();
		}

		this.vote(upIds,downIds);

		this.generate();
	}

	vote(upIds, downIds){
		const updateData = {
			up: {
					A: upIds[0],
					B: upIds[1],
					C: upIds[2]
				},
			down: {
					A: downIds[0],
					B: downIds[1],
					C: downIds[2]
				}
		}
		
		// var url = 'https://us-central1-searchforthebestgarfieldcomic.cloudfunctions.net/panelUpdate';
		// axios.post(url, {updateData}).then( res => {
		// 	console.log(res);
		// 	console.log(res.data);
		// })
	
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

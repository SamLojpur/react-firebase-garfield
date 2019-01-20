import React from 'react';
import ImageContainer from './components/ImageContainer';
import './App.css';
import firebase from './Firebase.js';

export default class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
			data: null	
        }
    }

    componentDidMount() {
        this.getImages();
    }

    handleVotingStuff(comic_clicked) {
        if (comic_clicked === 1) {
            alert("comic 1 clicked");
        } else {
            alert("comic 2 clicked");
		}
		
		this.getImages();
	}

    getImages() {

	// getMyDatabaseStuff(query)

		this.setState({data:{
			A1: "https://searchforthebestgarfieldcomic.com/panels/1985-01-01a.gif",
			B1: "https://searchforthebestgarfieldcomic.com/panels/1985-01-01b.gif",
			C1: "https://searchforthebestgarfieldcomic.com/panels/1985-01-01c.gif",
			A2: "https://searchforthebestgarfieldcomic.com/panels/1985-01-02a.gif",
			B2: "https://searchforthebestgarfieldcomic.com/panels/1985-01-02b.gif",
			C2: "https://searchforthebestgarfieldcomic.com/panels/1985-01-02c.gif"
		}})

	        

    }


    render() {
        if(!this.state.data) {
            return null;
        } else {
            return (
                <div className="App">
					<header className="App-header">
						<div onClick={() => {this.handleVotingStuff(1)}}>
							<ImageContainer>
								<img src={this.state.data.A1} className="panelImg"></img>
								<img src={this.state.data.B1} className="panelImg"></img>
								<img src={this.state.data.C1} className="panelImg"></img>
							</ImageContainer>
						</div>
						Which is funnier?
						<div onClick={() => {this.handleVotingStuff(2)}}>
							<ImageContainer>
								<img src={this.state.data.A2} className="panelImg"></img>
								<img src={this.state.data.B2} className="panelImg"></img>
								<img src={this.state.data.C2} className="panelImg"></img>
							</ImageContainer>
						</div>	
					</header>
                </div>
            )
        }
    }
}
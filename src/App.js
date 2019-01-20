import React from 'react';
import ImageContainer from './components/ImageContainer';
import './App.css';

export default class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
			URL: null,
			id: null	
        }
    }

    componentDidMount() {
        this.getImages();
    }

    handleVotingStuff(comic_clicked) {
        if (comic_clicked == 1) {
            alert("comic 1 clicked");
        } else {
            alert("comic 2 clicked");
        }
    }

    getImages() {
        // getMyDatabaseStuff(query)
        // .then( (result) => {

            this.setState({URL:{
                A1: "https://firebasestorage.googleapis.com/v0/b/searchforthebestgarfieldcomic.appspot.com/o/panels%2F1985-01-01a.gif?alt=media&token=8fae9162-f80c-45c1-b151-5a7c4804f7bc",
                B1: "https://firebasestorage.googleapis.com/v0/b/searchforthebestgarfieldcomic.appspot.com/o/panels%2F1985-01-01b.gif?alt=media&token=7bef96aa-7418-4d87-9ce4-d7fbbbd035a0",
                C1: "https://firebasestorage.googleapis.com/v0/b/searchforthebestgarfieldcomic.appspot.com/o/panels%2F1985-01-01c.gif?alt=media&token=c53f2fed-101d-4847-95c8-6b442798906e",
                A2: "https://firebasestorage.googleapis.com/v0/b/searchforthebestgarfieldcomic.appspot.com/o/panels%2F1985-08-05a.gif?alt=media&token=14659a01-a09d-4fdd-b2b6-faee2445eb26",
                B2: "https://firebasestorage.googleapis.com/v0/b/searchforthebestgarfieldcomic.appspot.com/o/panels%2F1985-08-05b.gif?alt=media&token=f7dc28d8-377d-4a17-90bd-bc052153cf2d",
                C2: "https://firebasestorage.googleapis.com/v0/b/searchforthebestgarfieldcomic.appspot.com/o/panels%2F1985-08-05c.gif?alt=media&token=c3df0020-75bb-4f7c-8155-5b98cac93274"
            }})
        // })
    }


    render() {
        if(!this.state.URL) {
            return null;
        } else {
            return (
                <div className="App">
					<header className="App-header">
						<div onClick={() => {this.handleVotingStuff(1)}}>
							<ImageContainer>
								<img src={this.state.URL.A1} className="panelImg"></img>
								<img src={this.state.URL.B1} className="panelImg"></img>
								<img src={this.state.URL.C1} className="panelImg"></img>
							</ImageContainer>
						</div>
						Which is funnier?
						<div onClick={() => {this.handleVotingStuff(2)}}>
							<ImageContainer>
								<img src={this.state.URL.A2} className="panelImg"></img>
								<img src={this.state.URL.B2} className="panelImg"></img>
								<img src={this.state.URL.C2} className="panelImg"></img>
							</ImageContainer>
						</div>
					</header>
                </div>
            )
        }
    }
}
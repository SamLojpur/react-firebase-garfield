import React from 'react';
import firebase from '../Firebase.js';
     // <------  import firebase

//import {DB_CONFIG} from './Config';

export default class Panel extends React.Component {

  constructor(props) {
    super(props);
    // this.app = firebase
    // this.database = this.app.database().ref().child('contents');
    this.state = {
      contents: 4
    };
  }

  myOnClick() {
    let newIndex = this.state.colorIndex + 1;
    if(newIndex > this.colors.length) {
      newIndex = 0;
    }

    this.setState({
      colorIndex: newIndex
    });
  }

  componentDidMount(){
    firebase.database().ref().child("contents").on('value' ,  snap => {
        this.setState({
  
          contents: snap.val()
        });

     }); 
}


  

    render() {
        return (
          <div>
            {this.state.contents}
          </div>
        );
      }
}

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ColorFamilyView from './ColorFamilyView.js';
import ColorFamilyInfoView from './ColorFamilyInfoView.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'mostClicked',
      colorFamilies: [],
      currentFamily: {
        __v: 0,
        _id: "5848cec52eceff776b7f29d4",
    color1: "#F3E9DC",
    color2: "#C08552",
    color3: "#5E3023",
    color4: "#895737",
    color5: "#DAB49D",
  copyCount: 0,  
  createdAt: "2016-12-08T03:08:53.049Z"
      }

    };
  }

  componentWillMount() {
    $.ajax({
      url: '/api/colors',
      success: function(data) {
        this.setState({ colorFamilies: data });
        console.log(this.state.colorFamilies);
      }.bind(this),
      dataType: 'JSON'
    });
  }

  render() {
    return (
      <div>
        <ColorFamilyView colorFamilies={this.state.colorFamilies}/>
        <ColorFamilyInfoView currentFamily={this.state.currentFamily}/>
      </div> 
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
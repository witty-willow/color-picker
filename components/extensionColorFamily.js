import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Grid} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ColorFamily from './ColorFamily';
  

var palette = {
  color1: {name: 'Cyan', hex: '#2DE1FC'},
  color2: {name: 'Spring Green', hex: '#2AFC98'},
  color3: {name: 'Malachite', hex: '#09E85E'},
  color4: {name: 'Mountain Meadow', hex: '#16C172'},
  color5: {name: 'Blue Dianne', hex: '#214F4B'},
}

var hexToRGB = function(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

var colorFamily2 = {
    color1: '#2DE1FC',
    color2: '#2AFC98',
    color3: '#09E85E',
    color4: '#16C172',
    color5: '#214F4B'
  }

console.log(colorFamily2);

class ExtensionColorFamily extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      greeting: 'hello'
    }
    this.getBrowserColors = this.getBrowserColors.bind(this)
  }

  componentWillMount(){
    this.setState({
      colorFamily: this.props.colorFamily
    })
  }

  getBrowserColors() {
    console.log('clicked')
    var msg = this.state.colorFamily;
    var params = {
      active: true,
      currentWindow: true    
    }
    // This searches for the active tabs in the current window
    chrome.tabs.query(params, gotTabs);

    // Now we've got the tabs
    function gotTabs(tabs) {
      // The first tab is the one you are on
      chrome.tabs.sendMessage(tabs[0].id, {currentColors: msg});//, messageBack);
    }
  }

  render() {
    return (
      <div>
        <ColorFamily colorFamily={this.state.colorFamily}/>
        <button onClick={this.getBrowserColors}>Apply Colors</button>
      </div>
    )
  }
}

ReactDOM.render(
  <ExtensionColorFamily colorFamily={palette}/>,
  document.getElementById('extensionBody')
);
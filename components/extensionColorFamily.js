import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Grid} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ColorFamily from './ColorFamily';
  

var colorFamily = {
<<<<<<< HEAD
    color1: '#2DE1FC',
    color2: '#2AFC98',
    color3: '#09E85E',
    color4: '#16C172',
    color5: '#214F4B'
=======
    color1: { hex: '#2DE1FC' },
    color2: { hex: '#2AFC98' },
    color3: { hex: '#09E85E' },
    color4: { hex: '#16C172' },
    color5: { hex: '#214F4B' }
>>>>>>> 88efd6f0389fad5a578dfe24e94a334a70f8a3ae
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
<<<<<<< HEAD
    color1: hexToRGB('#2DE1FC'),
    color2: hexToRGB('#2AFC98'),
    color3: hexToRGB('#09E85E'),
    color4: hexToRGB('#16C172'),
    color5: hexToRGB('#214F4B')
=======
    color1: '#2DE1FC',
    color2: '#2AFC98',
    color3: '#09E85E',
    color4: '#16C172',
    color5: '#214F4B'
>>>>>>> 88efd6f0389fad5a578dfe24e94a334a70f8a3ae
  }

console.log(colorFamily2);

class ExtensionColorFamily extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      greeting: 'hello'
    }
<<<<<<< HEAD
=======

    this.getBrowserColors = this.getBrowserColors.bind(this)
>>>>>>> 88efd6f0389fad5a578dfe24e94a334a70f8a3ae
  }

  componentWillMount(){
    this.setState({
      colorFamily: this.props.colorFamily
    })
  }

  getBrowserColors() {
    console.log('clicked')
<<<<<<< HEAD
    var msg = 'getBgColors';
=======
    var msg = this.state.colorFamily;
>>>>>>> 88efd6f0389fad5a578dfe24e94a334a70f8a3ae
    var params = {
      active: true,
      currentWindow: true    
    }
    // This searches for the active tabs in the current window
    chrome.tabs.query(params, gotTabs);

    // Now we've got the tabs
    function gotTabs(tabs) {
      // The first tab is the one you are on
<<<<<<< HEAD
      chrome.tabs.sendMessage(tabs[0].id, msg);//, messageBack);
=======
      chrome.tabs.sendMessage(tabs[0].id, {currentColors: msg});//, messageBack);
>>>>>>> 88efd6f0389fad5a578dfe24e94a334a70f8a3ae
    }
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        {this.state.greeting}
        <button onClick={this.getBrowserColors}>click me</button>
        <ColorFamily colorFamily={this.state.colorFamily}/>
=======
        <ColorFamily colorFamily={this.state.colorFamily}/>
        <button onClick={this.getBrowserColors}>Apply Colors</button>
>>>>>>> 88efd6f0389fad5a578dfe24e94a334a70f8a3ae
      </div>
    )
  }
}

ReactDOM.render(
<<<<<<< HEAD
  <ExtensionColorFamily colorFamily={colorFamily}/>,
=======
  <ExtensionColorFamily colorFamily={colorFamily2}/>,
>>>>>>> 88efd6f0389fad5a578dfe24e94a334a70f8a3ae
  document.getElementById('extensionBody')
);
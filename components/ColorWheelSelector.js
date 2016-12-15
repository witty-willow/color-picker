import React from 'react';
import { ChromePicker } from 'react-color';
import {Row, Col, Grid} from 'react-bootstrap';
import ColorFamily from './ColorFamily.js';
import ColorFamilySingle from './ColorFamilySingle.js';

class ColorWheelSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color1: '#ffffff',
      color2: '#FF5733',
      color3: '#1BA42C',
      color4: '#1B7CA4',
      color5: '#531BA4'
    }

    // this.state.colorFamily = {
    //   color1: '#ffffff',
    // }

    this.handleChange.bind(this);
  }

  handleChange(color, event) {
    var that = this;

    console.log('color hex', color)
    that.setState({
      color1: color.hex,
    })

    // for (var i = 2; i <= 5; i++) {
    //   var thisColor = {};
    //   var key = 'color' + i;
    //   thisColor[key] = that.state.color;
    //   console.log('obj', thisColor);
    //   that.setState(thisColor);
    // }
    console.log('color hex', that.state.color)
    console.log('color hex', that.state.apiColor)
  }

  render() {
    return (
      <iframe src="https://www.google.com/">
      </iframe>
    )
  }
}

module.exports = ColorWheelSelector;
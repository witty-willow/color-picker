import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import ColorFamily from './ColorFamily.js';
import { ChromePicker } from 'react-color';
import $ from 'jquery';

class CreateYourOwn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color1: '#A74696',
      color2: '',
      color3: '',
      color4: '',
      color5: '',
      colorData: 'Sample Stuff',
      currentColor: '#A74696'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleColorAPI = this.handleColorAPI.bind(this);
  }
  
  handleChange(color) {
    // return function (e) {
    //   var state = {};
    //   state[key] = e.target.value;
    //   this.setState(state);
    // }.bind(this)
    
    this.setState({currentColor: color.hex});
  
  }

  handleSubmit(event) {
    $.ajax({
      method: 'POST',
      url: 'api/colors',
      data: this.state,
      dataType: 'JSON',
      success: function (resp) {
        console.log('success', resp);
      },
      error: function (error) {
        console.log('error', error);
      }
    })
  }

  handleColorAPI(event) {
    event.preventDefault();
    $.ajax({
      method: 'GET',
      url: 'http://thecolorapi.com/id?hex=' + this.state.color1, //hex value without #
      dataType: 'jsonp',
      headers: {'Access-Control-Allow-Headers': '*', 'Content-Type':'application/json'},
      success: function(res) {
        console.log('Color API GET successful!');
        console.log('API res:', res);
        this.setState({colorData: res.name.value});
      }.bind(this)
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={3}> 
            <ChromePicker color={this.state.currentColor} onChangeComplete={this.handleChange.bind(this)}/>
          </Col>
          <Col xs={12} md={9}>
            <ColorFamily colorFamily={{color1: this.state.currentColor, color2: '#CF5C36', color3: '#EFC88B', color4: '#F4E3B2', color5: '#D3D5D7'}} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

module.exports = CreateYourOwn;
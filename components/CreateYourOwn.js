import React from 'react';
import {Row, Col, Grid, Button} from 'react-bootstrap';
import ColorFamily from './ColorFamily.js';
import { ChromePicker } from 'react-color';
import $ from 'jquery';

class CreateYourOwn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color1: '#2DE1FC',
      color2: '#2AFC98',
      color3: '#09E85E',
      color4: '#16C172',
      color5: '#214F4B',
      activeColor: '#FF0001',
      activeElement: 1,

      analogic: {
        color1: '#FFFFFF',
        color2: '#FFFFFF',
        color3: '#FFFFFF',
        color4: '#FFFFFF',
        color5: '#FFFFFF',
      },
      'analogic-complement': {
        color1: '#FFFFFF',
        color2: '#FFFFFF',
        color3: '#FFFFFF',
        color4: '#FFFFFF',
        color5: '#FFFFFF',
      },
      monochrome: {
        color1: '#FFFFFF',
        color2: '#FFFFFF',
        color3: '#FFFFFF',
        color4: '#FFFFFF',
        color5: '#FFFFFF',
      }    
    };

    this.handlePickerChange = this.handlePickerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleColorAPI = this.handleColorAPI.bind(this);
    this.handleActiveColor = this.handleActiveColor.bind(this);
    this.fetchColors = this.fetchColors.bind(this);
    this.handleActiveColorChange = this.handleActiveColorChange.bind(this);
  }
  
  handlePickerChange(color) {
    this.setState({
      ['color' + this.state.activeElement]: color.hex,
      activeColor: color.hex
    });
  }

  handleActiveColor(number) {
    this.setState({
      activeElement: number,
      activeColor: this.state['color' + number]
    });
  }

  handleActiveColorChange(color) {
    console.log(color);
    this.setState({
      ['color' + this.state.activeElement]: color
    })
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

  handleColorAPI(mode) {
    $.ajax({
      method: 'GET',
      url: 'http://thecolorapi.com/scheme?hex=' + this.state.activeColor.slice(1) + '&mode=' + mode,
      dataType: 'jsonp',
      headers: {'Access-Control-Allow-Headers': '*', 'Content-Type':'application/json'},
      success: function(res) {
        console.log('Color API GET successful!');
        console.log('Res', res);
        console.log('Color', res.colors[0].hex.value);
        this.setState({
          [mode]: {
            color1: res.colors[0].hex.value,
            color2: res.colors[1].hex.value,
            color3: res.colors[2].hex.value,
            color4: res.colors[3].hex.value,
            color5: res.colors[4].hex.value
          }
        });
      }.bind(this)
    });
  }

  fetchColors() {
    this.handleColorAPI('monochrome');
    this.handleColorAPI('analogic');
    this.handleColorAPI('analogic-complement');
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={3}> 
            <ChromePicker color={this.state.activeColor} onChangeComplete={this.handlePickerChange.bind(this)}/> <br/>
            <Button onClick={this.fetchColors.bind(this)}>Fetch Colors</Button> 
          </Col>
          <Col xs={12} md={9}>
            <ColorFamily isActiveView={true} handleActiveColor={this.handleActiveColor} colorFamily={this.state}/>
            <Row>
              <Col xs={12} md={12}><ColorFamily isActiveView={false} handleActiveColorChange={this.handleActiveColorChange} colorFamily={this.state.monochrome}/></Col>
              <Col xs={12} md={12}><ColorFamily isActiveView={false} handleActiveColorChange={this.handleActiveColorChange} colorFamily={this.state.analogic}/></Col>
              <Col xs={12} md={12}><ColorFamily isActiveView={false} handleActiveColorChange={this.handleActiveColorChange} colorFamily={this.state['analogic-complement']}/></Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    )
  }
}

module.exports = CreateYourOwn;
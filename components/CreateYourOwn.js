import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import ColorFamily from './ColorFamily.js';
import ColorFamilySingle from './ColorFamilySingle.js';
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
      activeColor: '#FF0000',
      activeElement: 1,
      quadColors: {
        color1: '#FFFFFF',
        color2: '#FFFFFF',
        color3: '#FFFFFF',
        color4: '#FFFFFF',
        color5: '#FFFFFF',
      },
      analogicColors: {
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
      monochromeColors: {
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
          [mode + 'Colors']: {
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
    this.handleColorAPI('quad');
  }

  render() {
    var styles = {
      rowStyle: {
        padding: "10px",
        height: 'px'
      }
    }

    return (
      <Grid>
        <Row>
          <Col xs={6} md={3}> 
            <ChromePicker color={this.state.activeColor} onChangeComplete={this.handlePickerChange.bind(this)}/>
          </Col>
          <Col xs={12} md={9}>
            <ColorFamily handleActiveColor={this.handleActiveColor} colorFamily={this.state}/>
            <Row>
              <form>
                <Col xs={6} md={3}><input type="radio" name="input" onClick={() => this.handleColorAPI('quad')}></input> quad </Col>
                <Col xs={6} md={3}><input type="radio" name="input" onClick={() => this.handleColorAPI('analogic')}></input> analogic </Col>
                <Col xs={6} md={3}><input type="radio" name="input" onClick={() => this.handleColorAPI('analogic-complement')}></input> analogic-complement </Col>
                <Col xs={6} md={3}><input type="radio" name="input" onClick={() => this.handleColorAPI('monochrome')}></input> monochrome </Col>
              </form>
            </Row>
          </Col>
          <Col xs={6} md={3}>Quad</Col>
          <Col xs={12} md={9}>
            <ColorFamily colorFamily={this.state.quadColors}/>
          </Col>
          <Col xs={6} md={3}>Analogic</Col>
          <Col xs={12} md={9}>
            <ColorFamily colorFamily={this.state.analogicColors}/>
          </Col>
          <Col xs={6} md={3}>Analogic Complement</Col>
          <Col xs={12} md={9}>
            <ColorFamily colorFamily={this.state['analogic-complement' + 'Colors']}/>
          </Col>
          <Col xs={6} md={3}>Monochrome</Col>
          <Col xs={12} md={9}>
            <ColorFamily colorFamily={this.state.monochromeColors}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

module.exports = CreateYourOwn;
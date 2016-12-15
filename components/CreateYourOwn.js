import React from 'react';
import {Row, Col, Grid, Button, FormControl, FormGroup} from 'react-bootstrap';
import ColorFamily from './ColorFamily.js';
import { ChromePicker } from 'react-color';
import $ from 'jquery';

class CreateYourOwn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeColor: '#FF0001',
      activeElement: 1,
      familyName: '',
      palette: {
        color1: {name: 'Cyan', hex: '#2DE1FC'},
        color2: {name: 'Spring Green', hex: '#2AFC98'},
        color3: {name: 'Malachite', hex: '#09E85E'},
        color4: {name: 'Mountain Meadow', hex: '#16C172'},
        color5: {name: 'Blue Dianne', hex: '#214F4B'},
      },
      analogic: {
        color1: {name: 'White', hex: '#FFFFFF'},
        color2: {name: 'White', hex: '#FFFFFF'},
        color3: {name: 'White', hex: '#FFFFFF'},
        color4: {name: 'White', hex: '#FFFFFF'},
        color5: {name: 'White', hex: '#FFFFFF'},
      },
      'analogic-complement': {
        color1: {name: 'White', hex: '#FFFFFF'},
        color2: {name: 'White', hex: '#FFFFFF'},
        color3: {name: 'White', hex: '#FFFFFF'},
        color4: {name: 'White', hex: '#FFFFFF'},
        color5: {name: 'White', hex: '#FFFFFF'},
      },
      monochrome: {
        color1: {name: 'White', hex: '#FFFFFF'},
        color2: {name: 'White', hex: '#FFFFFF'},
        color3: {name: 'White', hex: '#FFFFFF'},
        color4: {name: 'White', hex: '#FFFFFF'},
        color5: {name: 'White', hex: '#FFFFFF'},
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
    var palette = this.state.palette;
    palette['color' + this.state.activeElement].hex = color.hex;

    this.setState({
      palette: palette,
      activeColor: color.hex
    });
  }

  handleActiveColor(number) {
    this.setState({
      activeElement: number,
      activeColor: this.state.palette['color' + number].hex
    });
  }

  handleActiveColorChange(color) {
    var palette = this.state.palette;
    palette['color' + this.state.activeElement].hex = color.hex;
    palette['color' + this.state.activeElement].name = color.name;
    
    this.setState({
      palette: palette,
      activeColor: color
    });
  }

  handleFormChange(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  }

  handleSubmit(event) {
    if (this.state.familyName === '') {
      console.log('name cannot be empty');
    } else {
      $.ajax({
        method: 'POST',
        url: 'api/colors',
        data: {name: this.state.familyName, palette: this.state.palette},
        dataType: 'JSON',
        success: function (resp) {
          console.log('success', resp);
          this.props.fetchColors();
        }.bind(this),
        error: function (error) {
          console.log('error', error);
        }
      })
    }
  }

  handleColorAPI(mode) {
    $.ajax({
      method: 'GET',
      url: 'http://thecolorapi.com/scheme?hex=' + this.state.activeColor.slice(1) + '&mode=' + mode,
      dataType: 'jsonp',
      headers: {'Access-Control-Allow-Headers': '*', 'Content-Type':'application/json'},
      success: function(res) {
        console.log('Color API GET successful!');
        this.setState({
          [mode]: {
            color1: {name: res.colors[0].name.value, hex: res.colors[0].hex.value},
            color2: {name: res.colors[1].name.value, hex: res.colors[1].hex.value},
            color3: {name: res.colors[2].name.value, hex: res.colors[2].hex.value},
            color4: {name: res.colors[3].name.value, hex: res.colors[3].hex.value},
            color5: {name: res.colors[4].name.value, hex: res.colors[4].hex.value}
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
          <Col xs={12} md={12}>
            <FormGroup bsSize="large">
              <FormControl name="title" placeholder="Enter name..." onChange={this.handleFormChange('familyName')}/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3}> 
            <ChromePicker color={this.state.activeColor} onChangeComplete={this.handlePickerChange.bind(this)}/> <br/>
            <Button onClick={this.fetchColors.bind(this)} bsSize="large" block>Suggest Colors</Button> <br/>
            <Button onClick={this.handleSubmit.bind(this)} bsSize="large" bsStyle="success" block>Save Palette</Button> 
          </Col>
          <Col xs={12} md={9}>
            <ColorFamily isActiveView={true} handleActiveColor={this.handleActiveColor} colorFamily={this.state.palette}/> <br/>
            <Row>
              <Col xs={12} md={12}><ColorFamily isActiveView={false} handleActiveColorChange={this.handleActiveColorChange} colorFamily={this.state.monochrome}/></Col>
              <Col xs={12} md={12}><ColorFamily isActiveView={false} handleActiveColorChange={this.handleActiveColorChange} colorFamily={this.state.analogic}/></Col>
              <Col xs={12} md={12}><ColorFamily isActiveView={false} handleActiveColorChange={this.handleActiveColorChange} colorFamily={this.state['analogic-complement']}/></Col>
            </Row>
          </Col> 
        </Row> <br/> 
      </Grid>
    )
  }
}

module.exports = CreateYourOwn;
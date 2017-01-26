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
    var palette = this.props.palette;
    palette['color' + this.state.activeElement].hex = color.hex;
    palette['color' + this.state.activeElement].rgb = color.rgb;

    this.setState({
      activeColor: color.hex
    });

    this.props.handlePaletteChange(palette);

  }

  handleActiveColor(number) {
    this.setState({
      activeElement: number,
      activeColor: this.props.palette['color' + number].hex
    });
  }

  handleActiveColorChange(color) {
    var palette = this.props.palette;

    palette['color' + this.state.activeElement].name = color.name;
    palette['color' + this.state.activeElement].hex = color.hex;
    palette['color' + this.state.activeElement].rgb = color.rgb;
    
    this.setState({
      activeColor: color.hex
    });

    this.props.handlePaletteChange(palette);

  }

  // handleFormChange(key) {
  //   return function (e) {
  //     var state = {};
  //     state[key] = e.target.value;
  //     this.setState(state);
  //   }.bind(this);
  // }

  handleSubmit(event) {
    if (this.props.familyName === '') {
      console.log('name cannot be empty');
    } else {
      $.ajax({
        method: 'POST',
        url: 'api/colors',
        data: {name: this.props.familyName, palette: this.props.palette},
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
              <FormControl name="title" placeholder="Enter name..." value={this.props.familyName} onChange={this.props.handleFormChange('familyName')}/>
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
            <ColorFamily inCreate={true} isActiveView={true} handleActiveColor={this.handleActiveColor} colorFamily={this.props.palette}/> <br/>
            <Row>
              <Col xs={12} md={12}><ColorFamily inCreate={true} isActiveView={false} handleActiveColorChange={this.handleActiveColorChange} colorFamily={this.state.monochrome}/></Col>
              <Col xs={12} md={12}><ColorFamily inCreate={true} isActiveView={false} handleActiveColorChange={this.handleActiveColorChange} colorFamily={this.state.analogic}/></Col>
              <Col xs={12} md={12}><ColorFamily inCreate={true} isActiveView={false} handleActiveColorChange={this.handleActiveColorChange} colorFamily={this.state['analogic-complement']}/></Col>
            </Row>
          </Col> 
        </Row> <br/> 
      </Grid>
    )
  }
}

module.exports = CreateYourOwn;
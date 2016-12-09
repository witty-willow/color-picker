import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';


class ColorInfoView extends React.Component {
  constructor(props) {
    super(props);

  }

  hexToRGB(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  render() {
    return (
      <Row>
        <Col xsOffset={1} xs={3}><div style={{backgroundColor: this.props.color.hex, height: '30px', width: '30px'}}></div></Col>
        
        <Col xs={3}>{this.props.color.hex}</Col>
        
        <Col xs={3}>{this.props.color.rgb}</Col>
      </Row>
    )
  }


}

module.exports = ColorInfoView;
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

import React from 'react';


var ColorFamily = (props) => (
  <Row>
    <Col xs={2} xsOffset={1}>{props.colorFamily.color1}</Col>
    <Col xs={2}>{props.colorFamily.color2}</Col>
    <Col xs={2}>{props.colorFamily.color3}</Col>
    <Col xs={2}>{props.colorFamily.color4}</Col>
    <Col xs={2}>{props.colorFamily.color5}</Col>
  </Row>
);

module.exports = ColorFamily;
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

import React from 'react';


var ColorFamily = (props) => (
  <Row>
    <Col xs={2} xsOffset={1} {props.colorFamily[0]} />
    <Col xs={2} {props.colorFamily[1]} />
    <Col xs={2} {props.colorFamily[2]} />
    <Col xs={2} {props.colorFamily[3]} />
    <Col xs={2} xsOffset={1} {props.colorFamily[4]} />
  </Row>
);

module.exports = ColorFamily;
//react components

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Jumbotron, Button, Col, Row, Grid } from 'react-bootstrap';


class BootStrap extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={3}> Column 1</Col>
            <Col sm={6} md={3}> Column 2</Col>
            <Col sm={6} md={3}> Column 3</Col>
          </Row>
        </Grid>
    );
  }

}

module.exports = BootStrap;

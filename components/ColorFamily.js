import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class ColorFamily extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  render() {

    var styles = {
      rowStyle: {
        padding: "10px",
        height: 'px'
      },
      bc1: {
        backgroundColor: this.props.colorFamily.color1,
        height: "100px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },

      bc2: {
        backgroundColor: this.props.colorFamily.color2,
        height: "100px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },

      bc3: {
        backgroundColor: this.props.colorFamily.color3,
        height: "100px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      bc4: {
        backgroundColor: this.props.colorFamily.color4,
        height: "100px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },

      bc5: {
        backgroundColor: this.props.colorFamily.color5,
        height: "100px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }

    if (this.state.hover) {
      styles.bc1.boxShadow = '0px 0px 10px';
      styles.bc2.boxShadow = '0px 0px 10px';
      styles.bc3.boxShadow = '0px 0px 10px';
      styles.bc4.boxShadow = '0px 0px 10px';
      styles.bc5.boxShadow = '0px 0px 10px';
    } else {
      styles.rowStyle.backgroundColor = null;
    }
    return (
      <Row style={styles.rowStyle} onClick={() => (this.props.setCurrentFamily(this.props.colorFamily))} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} >
        <Col style={styles.bc1} xs={2} xsOffset={1} >
          <h4>{this.props.colorFamily.color1}</h4>
        </Col>
        <Col style={styles.bc2} xs={2}>
          <h4>{this.props.colorFamily.color2}</h4>
        </Col>
        <Col style={styles.bc3} xs={2}>
          <h4>{this.props.colorFamily.color3}</h4>
        </Col>
        <Col style={styles.bc4} xs={2}>
          <h4>{this.props.colorFamily.color4}</h4>
        </Col>
        <Col style={styles.bc5} xs={2}>
          <h4>{this.props.colorFamily.color5}</h4>
        </Col>
      </Row>
    )
  }

}

module.exports = ColorFamily;
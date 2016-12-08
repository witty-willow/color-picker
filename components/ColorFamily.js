import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';


class ColorFamily extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var styles = {
      rowStyle: {
        padding: "10px",
        height: '80px'
      },
      bc1: {
        backgroundColor: this.props.colorFamily.color1,
        height: "100px"
      },

      bc2: {
        backgroundColor: this.props.colorFamily.color2,
        height: "100px"
      },

      bc3: {
        backgroundColor: this.props.colorFamily.color3,
        height: "100px"
      },      
      bc4: {
        backgroundColor: this.props.colorFamily.color4,
        height: "100px"
      },

      bc5: {
        backgroundColor: this.props.colorFamily.color5,
        height: "100px"
      }
    }

    return (  
    <Grid>
      <Row style={styles.rowStyle}>
        <Col style={styles.bc1} xs={2} xsOffset={1}> {this.props.colorFamily.color1} </Col>
        <Col style={styles.bc2} xs={2}> {this.props.colorFamily.color2} </Col>
        <Col style={styles.bc3} xs={2}> {this.props.colorFamily.color3} </Col>
        <Col style={styles.bc4} xs={2}> {this.props.colorFamily.color4} </Col>
        <Col style={styles.bc5} xs={2}> {this.props.colorFamily.color5} </Col>
      </Row>
    </Grid>
    )
  }

}



module.exports = ColorFamily;
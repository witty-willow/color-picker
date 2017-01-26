import React from 'react';
import {Col} from 'react-bootstrap';

var MatchThis = (props) => {
  var styles = {
      background: {
        backgroundColor: props.color,
        height: "100px",
        width: "100px",
        color: props.color,
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s ease-in-out',
      }
    };
  
  return (<Col className="color-single" style={styles.background} xs={1}></Col>)
}

module.exports = MatchThis;
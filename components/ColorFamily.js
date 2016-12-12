import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ColorFamilySingle from './ColorFamilySingle.js';


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

  getFamilyColors() {
    var result = [];
    for (var color in this.props.colorFamily) {
      if (color.match(/^color./)) {
        result.push(this.props.colorFamily[color]);
      }
    }
    return result;
  }

  render() {
    var styles = {
      rowStyle: {
        padding: "10px",
        height: 'px'
      }
    }
    return (
      <Row style={styles.rowStyle} onClick={() => (this.props.setCurrentFamily(this.props.colorFamily))} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} >
        {this.getFamilyColors().map(function(color, index) {
          return <ColorFamilySingle hover={this.state.hover} color={color} key={index} index={index}/>
        }.bind(this))}
      </Row>
    )
  }

}

module.exports = ColorFamily;
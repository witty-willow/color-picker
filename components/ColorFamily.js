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
    this.onClickHandler = this.onClickHandler.bind(this);
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

  onClickHandler() {
    this.props.setCurrentFamily(this.props.colorFamily);
    this.props.toggleSidebarOn();
  }

  render() {
    var styles = {
      rowStyle: {
      }
    }
    return (
      <Row style={styles.rowStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} >
        {this.getFamilyColors().map(function(color, index) {
          return this.props.isActiveView ? <span onClick={() => this.props.handleActiveColor(index + 1)} key={index}><ColorFamilySingle hover={this.state.hover} color={color} key={index} index={index}/></span>
            : <span onClick={() => this.props.handleActiveColorChange(color)} key={index}><ColorFamilySingle hover={this.state.hover} color={color} key={index} index={index}/></span>
        }.bind(this))}
      </Row>
    )
  }

}

module.exports = ColorFamily;
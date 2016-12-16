import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SingleBlock from './singleBlock.js';


class MiniGame extends React.Component {
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
    for (var key in this.props.colorFamily) {
      var color = this.props.colorFamily[key];
      if (color.hex) {
        if (color.hex.match(/^#....../)) {
          result.push({name: color.name, hex: color.hex, rgb: color.rgb});
        }
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
    if (this.props.inCreate) {
      return (
        <Row style={styles.rowStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
          {this.getFamilyColors().map(function(color, index) {
            return this.props.isActiveView ? <span onClick={() => this.props.handleActiveColor(index + 1)} key={index}><ColorFamilySingle hover={this.state.hover} color={color.hex} key={index} index={index}/></span>
              : <span onClick={() => this.props.handleActiveColorChange(color)} key={index}><ColorFamilySingle hover={this.state.hover} color={color.hex} key={index} index={index}/></span>
          }.bind(this))}
        </Row>
      )
    } else {
      return (
        <Row style={styles.rowStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.onClickHandler}>
          {this.getFamilyColors().map(function(color, index) {
            return <ColorFamilySingle hover={this.state.hover} color={color.hex} key={index} index={index}/>
          }.bind(this))}
        </Row>
      )
    }
  }
}

module.exports = MiniGame;
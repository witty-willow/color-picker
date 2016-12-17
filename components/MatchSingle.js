import React from 'react';
import {Col} from 'react-bootstrap';

class MatchSingle extends React.Component {
  constructor(props) {
    super(props);
    console.log('block width', this.props.width)
    this.state = {
      height: null,
      hover: false
    };
    this.toggleHover = this.toggleHover.bind(this);
    // this.onClickHandler = this.onClickHandler.bind(this);
  }

  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  onClickHandler() {
    // this.props.setCurrentFamily(this.props.colorFamily);
    // this.props.toggleSidebarOn();
  }

  render() {
    var styles = {
      background: {
        backgroundColor: this.props.color,
        height: "100px",
        width: this.props.width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s ease-in-out',
      }
    };
    if (this.state.hover) {
      styles.background.boxShadow = '-3px 0 10px'
    }
    return (
      <div onClick={this.props.click} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
      {(
        <Col className="color-single" style={styles.background} xs={1}>
          <h4 style={styles.text}>{this.props.color}</h4>
        </Col>
      )}
      </div>
    )
  }
}

module.exports = MatchSingle;
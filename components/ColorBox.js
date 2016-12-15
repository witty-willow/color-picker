import React from 'react';

class ColorBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
    this.toggleHover = this.toggleHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  toggleHover() {
    this.setState({hover: !this.state.hover })
  }

  render () {
    var styles = {
      background: {
        backgroundColor: this.props.style
      }
    }; 

    var classNormal = 'box';
    var classHover = 'box-hover';
    var currentClassName;
    if (!this.state.hover) {
      currentClassName = classNormal;
    } else {
      currentClassName = classHover;
    }
    
    return (
      <div className={currentClassName} style={styles.background} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
      </div>
      );
  }
  //styleSheet1 will have the color passed in from the calling box
  //styleSheet 2 will be the same thing but with highlights and shit
}

export default ColorBox;
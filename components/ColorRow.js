import React from 'react';
import ColorBox from './ColorBox.js'


class ColorRow extends React.Component {

  constructor (props) {
    super (props);
  }

  render () {
    var colors = this.props.colors;

    return (
      <div className="color-row">
        {
        colors.map((color, index) =>
          <ColorBox style={color} key={index} />
        )}
      </div>
      );
  }
}

export default ColorRow;
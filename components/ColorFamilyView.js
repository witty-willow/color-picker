import React from 'react';
import ColorFamily from './ColorFamily.js';

class ColorFamilyView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.colorFamilies.map(function(obj, index) {
          return <ColorFamily colorFamily={obj} key={index} />
        })}
      </div>
    );
  }

}

module.exports = ColorFamilyView;
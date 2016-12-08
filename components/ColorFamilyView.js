import React from 'react';

class ColorFamilyView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'mostClicked',
      colorFamilies: null
    };
  }

  // componentDidMount() {

  // }

  render() {
    return (
      <div>
        hello
      </div>
    );
  }

}

module.exports = ColorFamilyView;
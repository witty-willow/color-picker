import React from 'react';
import $ from 'jquery';

class ColorFamilyView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'mostClicked',
      colorFamilies: []
    };
  }

  componentWillMount() {
    $.ajax({
      url: '/api/colors',
      success: function(data) {
        this.setState({ colorFamilies: data });

        console.log(this.state.colorFamilies);
      }.bind(this),
      dataType: 'JSON'
    });
  }

  render() {
    return (
      // todo: render ethan's component array.length times
      <div>
        {this.state.colorFamilies.map(function(obj) {
          
        })}
      </div>
    );
  }

}

module.exports = ColorFamilyView;
import React from 'react';
import $ from 'jquery';

class ColorFamilyView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'mostClicked',
      colorFamilies: null
    };
  }

  componentWillMount() {
    $.ajax({
      url: '/api/colors',
      success: function(data) {
        console.log('successfully retrieved', data)
      },
      dataType: 'JSON'
    });
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }

}

module.exports = ColorFamilyView;
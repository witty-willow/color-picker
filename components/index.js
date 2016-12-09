import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ColorFamilyView from './ColorFamilyView.js';


class App extends React.Component {
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
      <div>
        <ColorFamilyView colorFamilies={this.state.colorFamilies}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
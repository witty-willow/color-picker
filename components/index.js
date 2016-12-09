import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ColorFamilyView from './ColorFamilyView.js';
import ColorFamilyInfoView from './ColorFamilyInfoView.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'mostClicked',
      colorFamilies: [],
      currentFamily: {}
    };
  }
  setCurrentFamily(familyData) {
    this.setState({
      currentFamily: familyData
    });
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
        <ColorFamilyView setCurrentFamily={this.setCurrentFamily.bind(this)} colorFamilies={this.state.colorFamilies}/>
        <ColorFamilyInfoView currentFamily={this.state.currentFamily}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
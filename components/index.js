import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ColorFamilyView from './ColorFamilyView.js';
import ColorFamilyInfoView from './ColorFamilyInfoView.js';
import FilterBar from './FilterBar.js';
import {Grid} from 'react-bootstrap';

//make object {blue: {min=x, max=y}}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'mostClicked',
      currentFamily: {},
      colorFamilies: [],
      filterRangeMin: 0,
      filterRangeMax: 0
    };

    this.handleStateChange = this.handleStateChange.bind(this);

    var codes = {
      Blue: {},
      Green: {},
      Yellow: {},
      Red: {}
    }
  }



  handleStateChange (color) {

    var filteredColorFamilies = [];

    this.setState({
      currentFilter: color
      filterRangeMin: codes.color.min,
      filterRangeMax: codes.color.max, 
    });
  

    this.state.colorFamilies.forEach(function (obj) {
      var include = false;
      for (var key in obj) {
        if (key.slice(0,5) === 'color') {
          var colorInt = parseInt(obj[key], 16);
          if (colorInt > this.state.filterRangeMin && colorInt < this.state.filterRangeMax) {
            include = true;
          }
        }
      }
      if (include === true) {
        filteredColorFamilies.push(obj)
      }
    }.bind(this))
    this.setState({
      colorFamilies: filteredColorFamilies
    });
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

        <FilterBar handleStateChange={this.handleStateChange} currentFilter={this.state.currentFilter} />
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
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ColorFamilyView from './ColorFamilyView.js';
import FilterBar from './FilterBar.js';
import {Grid} from 'react-bootstrap';

//make object {blue: {min=x, max=y}}



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'mostClicked',
      filterRangeMin: 0,
      filterRangeMax: 0,
      colorFamilies: []
    };

    this.handleStateChange = this.handleStateChange.bind(this);
  }



  handleStateChange (color) {

    var filteredColorFamilies = [];

    this.setState({
      currentFilter: color
      // Need to determine how to access codes
      // filterRangeMin: codes.color.min,
      // filterRangeMax: codes.color.max, 
    });

    console.log('OUTER CONTEXT', this)
  

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
        <ColorFamilyView colorFamilies={this.state.colorFamilies}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
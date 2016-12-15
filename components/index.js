import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ColorFamilyView from './ColorFamilyView.js';
import ColorFamilyInfoView from './ColorFamilyInfoView.js';
import CreateYourOwn from './CreateYourOwn.js';
import FilterBar from './FilterBar.js';
import {Button, Grid} from 'react-bootstrap';
import Templates from './Templates.js'

// emm's testing data for templates
var colors = {
  c1: '#87CA80',
  c2: '#95D68E',
  c3: '#E6ACB6',
  c4: '#E7BEAF',
  c5: '#E9D9B2',
}

var sortObj = function (obj) {
  return Object.keys(obj).sort(function(a,b){return obj[b]-obj[a]})
}

//this app relies heavily on React Bootstrap
//https://react-bootstrap.github.io/ for the documentation

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'mostClicked',
      currentFamily: {},
      colorFamilies: [],
      allFamilies: [],
      appClass: 'app-main-full',
      sidebarClass: 'app-sidebar-hidden',
      createClass: 'create-family-hidden'
    };

    this.handleStateChange = this.handleStateChange.bind(this);
    this.toggleSidebarOn = this.toggleSidebarOn.bind(this);
    this.toggleSidebarOff = this.toggleSidebarOff.bind(this);
    this.toggleSubmitForm = this.toggleSubmitForm.bind(this);
    this.fetchColors = this.fetchColors.bind(this);
  }

  //Convert hex values to rgb object
  hexToRGB(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      red: parseInt(result[1], 16),
      green: parseInt(result[2], 16),
      blue: parseInt(result[3], 16)
    } : null;
  }

  //Filter display based on navbar color choices
  handleStateChange (color) {
    var filteredColorFamilies = [];

    this.setState({
      currentFilter: color,
    });

    this.state.allFamilies.forEach(function (obj) {
      var include = false;
      for (var key in obj) {
        if (key.slice(0,5) === 'color') {
          var colorRgb = this.hexToRGB(obj[key], 16);
          if (color === 'red') {
            if (colorRgb.red > (1.5 * colorRgb.blue) && colorRgb.red > (1.5 * colorRgb.green))
              include = true;
          }
          if (color === 'blue') {
            if (colorRgb.blue > (1.5 * colorRgb.red) && colorRgb.blue > (1.5 * colorRgb.green))
              include = true;
          }
          if (color === 'green') {
            if (colorRgb.green > (1.5 * colorRgb.blue) && colorRgb.green > (1.5 * colorRgb.red))
              include = true;
          }
          if (color === 'all') {
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

  filterByCopyCount(filter){
    var filteredColorFamilies = [];

    this.setState({
      currentFilter: filter,
    });
  }

  setCurrentFamily(familyData) {
    this.setState({
      currentFamily: familyData
    });
  }


  toggleSubmitForm() {
    if (this.state.createClass === 'create-family-hidden') {
      this.setState({createClass: 'create-family-show'});
    } else {
      this.setState({createClass: 'create-family-hidden'});
    }
  }

  //Change state of components to display side via css

  toggleSidebarOn() {
    this.setState({
      sidebarClass: 'app-sidebar',
      appClass: 'app-main'
    });
    console.log('toggle on')
  }

  toggleSidebarOff() {
    this.setState({
      sidebarClass: 'app-sidebar-hidden',
      appClass: 'app-main-full'
    });
    console.log('toggle off')
  }

  fetchColors() {
    $.ajax({
      url: '/api/colors',
      success: function(data) {
        this.setState({ colorFamilies: data });
        this.setState({ allFamilies: data });
      }.bind(this),
      dataType: 'JSON'
    });
  }

  //load data before render
  componentWillMount() {
    this.fetchColors()
  }

  //Filters
  sortByToday() {
    var that = this
    $.ajax({
      method: 'GET',
      url: '/api/daily',
      success: function (resp) {
        var sortedFamilyId = sortObj(resp);

        that.setState({
          currentFilter: 'Today',
        });

        var all = that.state.allFamilies;

        var today = sortedFamilyId.map(function(id){
          for(var i=0; i<all.length; i++){
            if(all[i]._id === id) {
              return all[i];
            }
          }
        })

        that.setState({
          colorFamilies: today,
          popularToday: today
        });
      },
      error: function (error) {
        console.log('error', error);
      }
    })
  }

  // sortByWeek(){
    
  // }

  render() {
    return (
      <div className="app-body">
        <FilterBar className="app-nav" handleStateChange={this.handleStateChange} currentFilter={this.state.currentFilter} toggleSubmit={this.toggleSubmitForm} sortByToday={this.sortByToday.bind(this)}/>
        <div>
          <div className={this.state.appClass}>
            <div className={this.state.createClass}>
            <CreateYourOwn fetchColors={this.fetchColors.bind(this)}/>
            </div>

            <ColorFamilyView setCurrentFamily={this.setCurrentFamily.bind(this)} colorFamilies={this.state.colorFamilies} toggleSidebarOn={this.toggleSidebarOn}/>
          </div>
          <div className={this.state.sidebarClass}>
            <ColorFamilyInfoView currentFamily={this.state.currentFamily} toggleSidebarOff={this.toggleSidebarOff} fetchColors={this.fetchColors.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
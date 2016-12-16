import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Grid} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ColorFamily from './ColorFamily';
import $ from 'jquery';

var palette = {
  color1: {name: 'Cyan', hex: '#2DE1FC'},
  color2: {name: 'Spring Green', hex: '#2AFC98'},
  color3: {name: 'Malachite', hex: '#09E85E'},
  color4: {name: 'Mountain Meadow', hex: '#16C172'},
  color5: {name: 'Blue Dianne', hex: '#214F4B'},
}

var defaultColor = {
  color1: {name: 'White', hex: '#FFFFFF'},
  color2: {name: 'White', hex: '#FFFFFF'},
  color3: {name: 'White', hex: '#FFFFFF'},
  color4: {name: 'White', hex: '#FFFFFF'},
  color5: {name: 'White', hex: '#FFFFFF'},
}

class ExtensionColorFamily extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      familyName: null,
      colorFamily: null,
      sitePalette: null,
      siteName: 'Click "Get Site Colors" to find the palette of this site!'
    }
    this.getBrowserColors = this.getBrowserColors.bind(this)
    this.setBrowserColors = this.setBrowserColors.bind(this)
    this.getCurrentPalette = this.getCurrentPalette.bind(this)
    this.saveBrowserColors = this.saveBrowserColors.bind(this)
  }

  componentWillMount(){
    this.getCurrentPalette();

    // this.setState({
    //   familyName: 'Click the "Test Color Scheme" button to test!',
    //   colorFamily: this.props.colorFamily,
    //   sitePalette: this.props.colorFamily,
    //   siteName: 'Click "Get Site Colors" to find the palette of this site!'
    // })
  }

  getCurrentPalette(){
    var that = this;
    $.ajax({
      method: 'GET',
      url: 'http://localhost:8000/api/ext',
      success: function(resp) {
        if (resp !== 'No family selected'){
          console.log('res', resp)
          that.setState({
            familyName: resp.name,
            colorFamily: {
              color1: resp.color1,
              color2: resp.color2,
              color3: resp.color3,
              color4: resp.color4,
              color5: resp.color5,
            }
          })
        }
      },
      error: function(error) {
        console.log('error', error);
      }
    });
  }

  setBrowserColors() {
    console.log('clicked')
    var msg = this.state.colorFamily;
    var params = {
      active: true,
      currentWindow: true    
    }
    // This searches for the active tabs in the current window
    chrome.tabs.query(params, gotTabs);

    // Now we've got the tabs
    function gotTabs(tabs) {
      // The first tab is the one you are on
      chrome.tabs.sendMessage(tabs[0].id, {task: 'setBgColors', currentColors: msg});//, messageBack);
    }
  }

  getBrowserColors() {
    var params = {
      active: true,
      currentWindow: true    
    }
    var that = this;
    // This searches for the active tabs in the current window
    chrome.tabs.query(params, gotTabs);

    // Now we've got the tabs
    function gotTabs(tabs) {
      // The first tab is the one you are on
      chrome.tabs.sendMessage(tabs[0].id, {task: 'getBgColors'}, function(res){
        console.log('received response', res)
        that.setState({
          siteName: res.name,
          sitePalette: {
            color1: {name: 'c1', hex: res.palette[0]},
            color2: {name: 'c2', hex: res.palette[1]},
            color3: {name: 'c3', hex: res.palette[2]},
            color4: {name: 'c4', hex: res.palette[3]},
            color5: {name: 'c5', hex: res.palette[4]}         
          }
        })
        console.log('new state', that.state.sitePalette)
      });//, messageBack);
    }
  }

  saveBrowserColors() {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8000/api/colors',
      data: {name: this.state.siteName, palette: this.state.sitePalette},
      dataType: 'JSON',
      success: function (resp) {
        console.log('success', resp);
      }.bind(this),
      error: function (error) {
        console.log('error', error);
      }
    })
  }

  render() {
    return (
      <div>
        Active Family: <b>{this.state.familyName || 'none selected'}</b>
        { this.state.colorFamily &&
          <div>
          <ColorFamily colorFamily={this.state.colorFamily}/>
          <button onClick={this.setBrowserColors}>Apply Colors</button>
          </div>
        }
        { !this.state.colorFamily && <p display='none'>Please send a palette from your app to apply colors to this page.</p>}
        <br></br>Site Palette: <b>{this.state.siteName}</b>
        <button onClick={this.getBrowserColors}>Get Site Colors</button>
        { this.state.sitePalette &&
          <div>
            <ColorFamily colorFamily={this.state.sitePalette}/>
            <button onClick={this.saveBrowserColors}>Save this palette</button>
          </div>
        }
      </div>
    )
  }
}

ReactDOM.render(
  <ExtensionColorFamily />,
  document.getElementById('extensionBody')
);
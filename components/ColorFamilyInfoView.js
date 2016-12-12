import React from 'react';
import ColorInfoView from './ColorInfoView';
import {Row, Col, Grid} from 'react-bootstrap';


var hexToRGB = function(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

class ColorFamilyInfoView extends React.Component {
  constructor(props) {
    super(props);
  }

  convertHexToRGB() {
    var objArr = [];
    for(var key in this.props.currentFamily) {
      if(key.match(/^color./)) {
        var newObj = {};
        var rgbObj = hexToRGB(this.props.currentFamily[key]);
        var rgb = 'rgb(' + rgbObj.r + ', ' + rgbObj.g + ', ' + rgbObj.b + ')';
        var newObj = {hex: this.props.currentFamily[key], rgb: rgb};
        objArr.push(newObj);
      }
    }
    return objArr;
  }

  render() {
    return (
      <div className="content-wrap">
        <h5>Click a Code to Copy!</h5>
        <br/>
        {this.convertHexToRGB().map(function(color, index) {
          return <ColorInfoView color={color} key={index} index={index}/>
        })}
      </div>
    )
  }
}

module.exports = ColorFamilyInfoView;
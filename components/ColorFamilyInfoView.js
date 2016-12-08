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
    this.convertHexToRGB()
    return (
      <Grid>
        {this.convertHexToRGB().map(function(color, index) {
          return <ColorInfoView color={color} key={index} index={index}/>
        })}
      </Grid>
    ) 
  }
}





// var ColorFamilyInfoView = (props) => (
//   <div className='container'>  
//     <div><h2>Color Family Info</h2></div>
//     <div className="infoView" >
//       color 1 = {props.currentColorFamily.color1} = hexToRGB({props.currentColorFamily.color1})
//       color 2 = {props.currentColorFamily.color2} = hexToRGB({props.currentColorFamily.color2})
//       color 3 = {props.currentColorFamily.color3} = hexToRGB({props.currentColorFamily.color3})
//       color 4 = {props.currentColorFamily.color4} = hexToRGB({props.currentColorFamily.color4})
//       color 5 = {props.currentColorFamily.color5} = hexToRGB({props.currentColorFamily.color5})
//     </div>
//   </div>
// );



module.exports = ColorFamilyInfoView;
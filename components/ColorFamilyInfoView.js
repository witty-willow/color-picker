import React from 'react';
import ColorInfoView from './ColorInfoView';
import {Panel, Button, Row, Col, Grid, Modal} from 'react-bootstrap';
import Templates from './Templates';
import $ from 'jquery';


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
    this.state = { 
      show: false
    }
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);  
  }

  
  showModal() {
    this.setState({show: true});
  }

  
  hideModal() {
    this.setState({show: false});
  }


  convertHexToRGB() {
    var objArr = [];
    var family = this.props.currentFamily;
    for (var key in family) {
      if (family[key].hex) {
        var newObj = {};
        var newObj = {name: family[key].name, hex: family[key].hex};
        objArr.push(newObj);
      }
    }
    return objArr;
  }

  copyCount() {
    $.ajax({
      method: 'POST',
      url: '/api/copycount',
      data: {familyId: this.props.currentFamily._id},
      dataType: 'JSON',
      success: function (resp) {
        console.log('success', resp);
      },
      error: function (error) {
        console.log('error', error);
      }
    })
  }

  render() {
    var that = this;
    return (
      <div className="sidebar-content">
        <h3>{this.props.currentFamily.name}</h3>
        <h5>Click a Code to Copy!</h5>
        <div className="color-family-info">
          {Object.keys(this.props.currentFamily).map((color, index) => {
            if (this.props.currentFamily[color].hex) {
              return <ColorInfoView color={this.props.currentFamily[color]} key={index} index={index} copyCount={that.copyCount.bind(that)}/>
            }
          })}
        </div>

        <Button block bsStyle="primary" onClick={this.showModal}>
          Preview Palette
        </Button> <br></br>
        <Button block bsStyle="default" onClick={this.props.toggleSidebarOff}>Hide Sidebar</Button> <br></br>
        
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
          class='modal'
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Modal Heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Templates colors={this.props.currentFamily}/>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}





module.exports = ColorFamilyInfoView;
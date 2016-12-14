import React from 'react';
import ColorInfoView from './ColorInfoView';
import {Panel, Button, Row, Col, Grid, Modal} from 'react-bootstrap';


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
    for (var key in this.props.currentFamily) {
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
    console.log(this.props.currentFamily);

    var styles = {
      borderColor1: {
        margin: '1px',
        borderWidth: '2px',
        borderColor: this.props.currentFamily.color1
      },   
      bgColor1: {
        margin: '1px',
        backgroundColor: this.props.currentFamily.color1
      },

      borderColor2: {
        margin: '1px',
        borderWidth: '2px',
        borderColor: this.props.currentFamily.color2
      },       
      bgColor2: {
        margin: '1px',
        backgroundColor: this.props.currentFamily.color2
      },

      borderColor3: {
        margin: '1px',
        borderWidth: '2px',
        borderColor: this.props.currentFamily.color3
      },   
      bgColor3: {
        margin: '1px',
        backgroundColor: this.props.currentFamily.color3
      },

      borderColor4: {
        margin: '1px',
        borderWidth: '2px',
        borderColor: this.props.currentFamily.color4
      },   
      bgColor4: {
        margin: '1px',
        backgroundColor: this.props.currentFamily.color4
      },

      borderColor5: {
        margin: '1px',
        borderWidth: '2px',
        borderColor: this.props.currentFamily.color5
      },   
      bgColor5: {
        margin: '1px',
        backgroundColor: this.props.currentFamily.color5
      }
    }

    return (
      <div className="sidebar-content">
        <h5>Click a Code to Copy!</h5>
        <Button onClick={this.props.toggleSidebarOff}>Hide Sidebar</Button>
        <div className="color-family-info">
          {this.convertHexToRGB().map(function(color, index) {
            return <ColorInfoView color={color} key={index} index={index}/>
          })}
          
           <h5> Example UI Elements</h5>

          <Panel style={styles.bgColor5}>
          Panel
          </Panel>
            <Button style={styles.bgColor1}> Color 1 </Button>
            <Button style={styles.bgColor2}> Color 2 </Button>
            <Button style={styles.bgColor3}> Color 3 </Button>
            <Button style={styles.bgColor4}> Color 4 </Button>   
            <Button style={styles.bgColor5}> Color 5 </Button> <br/><br/> 

          <Panel style={styles.borderColor5}>
          Panel
          </Panel>
            <Button style={styles.borderColor1}> Color 1 </Button>
            <Button style={styles.borderColor2}> Color 2 </Button>
            <Button style={styles.borderColor3}> Color 3 </Button>
            <Button style={styles.borderColor4}> Color 4 </Button>   
            <Button style={styles.borderColor5}> Color 5 </Button>

        </div>

        
        <Button bsStyle="primary" onClick={this.showModal}>
          Preview Color Scheme
        </Button>
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Modal Heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Wrapped Text</h4>
            <p>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
             Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem! Dolores debitis voluptatibus ipsum dicta. Dolor quod amet ab sint esse distinctio tenetur. Veritatis laudantium quibusdam quidem corporis architecto veritatis. Ex facilis minima beatae sunt perspiciatis placeat. Quasi corporis
             odio eaque voluptatibus ratione magnam nulla? Amet cum maiores consequuntur totam dicta! Inventore adipisicing vel vero odio modi doloremque? Vitae porro impedit ea minima laboriosam quisquam neque. Perspiciatis omnis obcaecati consequatur sunt deleniti similique facilis sequi. Ipsum harum vitae modi reiciendis officiis.
             ex ea temporibus in tempore voluptates cumque. Quidem nam dolor reiciendis qui dolor assumenda ipsam veritatis quasi. Esse! Sit consectetur hic et sunt iste! Accusantium atque elit voluptate asperiores corrupti temporibus mollitia! Placeat soluta odio ad blanditiis nisi. Eius reiciendis id quos dolorum eaque suscipit
             magni delectus maxime. Sit odit provident vel magnam quod. Possimus eligendi non corrupti tenetur culpa accusantium quod quis. Voluptatum quaerat animi dolore maiores molestias voluptate? Necessitatibus illo omnis laborum hic enim minima! Similique. Dolor voluptatum reprehenderit nihil adipisci aperiam voluptatem soluta
             magnam accusamus iste incidunt tempore consequatur illo illo odit. Asperiores nesciunt iusto nemo animi ratione. Sunt odit similique doloribus temporibus reiciendis! Ullam. Dolor dolores veniam animi sequi dolores molestias voluptatem iure velit. Elit dolore quaerat incidunt enim aut distinctio. Ratione molestiae laboriosam
             similique laboriosam eum et nemo expedita. Consequuntur perspiciatis cumque dolorem.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }
}





module.exports = ColorFamilyInfoView;
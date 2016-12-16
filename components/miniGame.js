import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SingleBlock from './singleBlock.js';


class MiniGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      colorFamily: {_id:"5853298cfd140508aaa054b9",name:"Blue",color1:{name:"Pine Tree",hex:"#1A2303"},color2:{name:"Green Leaf",hex:"#3C5307"},color3:{name:"Green Leaf",hex:"#5E830A"},color4:{name:"Pistachio",hex:"#81B30C"},color5:{name:"Inch Worm",hex:"#A4E40E"},__v:0,createdAt:"2016-12-15T23:38:52.022Z"}
    };
    this.toggleHover = this.toggleHover.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  onClickHandler() {
  }

  render() {
    return (
      <div>
      <Row onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        <Col>
          <SingleBlock hover={this.state.hover} color={this.state.colorFamily.color1.hex}/>
          <SingleBlock hover={this.state.hover} color={this.state.colorFamily.color2.hex}/>
        </Col>
      </Row>
      <Row onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        <Col>
          <SingleBlock hover={this.state.hover} color={this.state.colorFamily.color3.hex}/>
          <SingleBlock hover={this.state.hover} color={this.state.colorFamily.color4.hex}/>
        </Col>
      </Row>
      </div>
    )
  }
}

 // <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
 //      {this.props.index === 0 ? (
 //        <Col className="color-single" style={styles.background} xs={2} xsOffset={1}>
 //          <h4 style={styles.text}>{this.props.color}</h4>
 //        </Col>
 //      ) : (
 //        <Col className="color-single" style={styles.background} xs={2}>
 //          <h4 style={styles.text}>{this.props.color}</h4>
 //        </Col>
 //      )}
 //      </div>

//  <Row onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
// </Row>

// if (this.props.inCreate) {
  //     return (
  //       <Row style={styles.rowStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
  //         {this.getFamilyColors().map(function(color, index) {
  //           return this.props.isActiveView ? <span onClick={() => this.props.handleActiveColor(index + 1)} key={index}><ColorFamilySingle hover={this.state.hover} color={color.hex} key={index} index={index}/></span>
  //             : <span onClick={() => this.props.handleActiveColorChange(color)} key={index}><ColorFamilySingle hover={this.state.hover} color={color.hex} key={index} index={index}/></span>
  //         }.bind(this))}
  //       </Row>
  //     )
  //   } else {
  //     return (
  //       <Row style={styles.rowStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.onClickHandler}>
  //         {this.getFamilyColors().map(function(color, index) {
  //           return <ColorFamilySingle hover={this.state.hover} color={color.hex} key={index} index={index}/>
  //         }.bind(this))}
  //       </Row>
  //     )
  //   }
  // }

module.exports = MiniGame;
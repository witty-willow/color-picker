import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SingleBlock from './singleBlock.js';
import tinycolor from 'tinycolor2';


class MiniGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      normal: "#f48042",
      lighter: "#f7a072",
      index: 0,
      size: 2,
      hover: false,
      colorFamily: {_id:"5853298cfd140508aaa054b9",name:"Blue",color1:{name:"Pine Tree",hex:"#1A2303"},color2:{name:"Green Leaf",hex:"#3C5307"},color3:{name:"Green Leaf",hex:"#5E830A"},color4:{name:"Pistachio",hex:"#81B30C"},color5:{name:"Inch Worm",hex:"#A4E40E"},__v:0,createdAt:"2016-12-15T23:38:52.022Z"}
    };
    this.toggleHover = this.toggleHover.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  getFamilyColor() {
    var hex = '#'+Math.random().toString(16).substr(-6);
    var hsl = tinycolor(hex).toHsl();
    hsl.l += .10
    var lighter = tinycolor(hsl).toHexString();
    this.setState({
      normal: hex,
      lighter: lighter
    })

    console.log(this.state.normal, this.state.lighter)
  }

  getIndex(){
    var newInd = Math.floor(Math.random()*Math.pow(this.state.size, 2));
    this.setState({
      index: newInd
    })
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
          <SingleBlock hover={this.state.hover} color={this.state.normal} click={this.getNewIndex.bind(this)}/>
          <SingleBlock hover={this.state.hover} color={this.state.normal}/>
        </Col>
      </Row>
      <Row onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        <Col>
          <SingleBlock hover={this.state.hover} color={this.state.normal}/>
          <SingleBlock hover={this.state.hover} color={this.state.lighter}/>
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
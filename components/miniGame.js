import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Colume from './colume.js';
import tinycolor from 'tinycolor2';


class MiniGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      normal: "#ef8275",
      lighter: "#f4aba3",
      index: 1,
      size: 2,
      hover: false,
      gap: .10
    };
    this.toggleHover = this.toggleHover.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  getColor() {
    var hex = '#'+Math.random().toString(16).substr(-6);
    var hsl = tinycolor(hex).toHsl();
    hsl.l += this.state.gap
    var lighter = tinycolor(hsl).toHexString();
    this.setState({
      normal: hex,
      lighter: lighter
    })
  }

  getIndex(){
    var newInd = Math.ceil(Math.random()*Math.pow(this.state.size, 2));
    this.setState({
      index: newInd
    })
  }

  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  correct() {
    if(this.state.normal === this.state.lighter){
      alert("Impressive! YOU WIN!!");
      this.setState({
        size: 2,
        gap: .10
      })
    } else {
      this.setState({
        size: ++this.state.size,
        gap: this.state.gap * 0.80
      })
    }
    this.getIndex();
    this.getColor();
  }

  incorrect() {
    this.setState({
      size: 2,
      gap: .10
    })
    this.getIndex();
    this.getColor();
    alert('Wrong tile! YOU LOSE!!');
  }

  onClickHandler() {

  }

  render() {
    //Make rows
    var rows = []
    for(var i=0; i<this.state.size; i++){
      rows.push(<Row onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
       <Colume correct={this.correct.bind(this)} incorrect={this.incorrect.bind(this)} index={this.state.index} rowInd={i} size={this.state.size} hover={this.state.hover} normal={this.state.normal} lighter={this.state.lighter} click={this.getColor.bind(this)}/>
      </Row>)
    }

    return (
      <Grid>
      <Row>
      <Col md={12}>
      <div id='minigame'>
        <h1>MiniGame</h1>
        <h5>Select different colored tile</h5>
        <div className='game'>{rows}</div>
      </div>
      </Col>
      </Row>
      </Grid>
    )
  }
}

// <Row onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
//         <Col>
//           <SingleBlock hover={this.state.hover} color={this.state.normal}/>
//           <SingleBlock hover={this.state.hover} color={this.state.lighter}/>
//         </Col>
//       </Row>

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
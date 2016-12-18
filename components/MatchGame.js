import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MatchColume from './MatchColume.js';
import MatchThis from './MatchThis.js';
import tinycolor from 'tinycolor2';


class MatchGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "#ef8275",
      next: "#ef8275",
      similarColor: ["#f4aba3", "#f4aba3", "#f4aba3", "#f4aba3"],
      index: 1,
      size: 2,
      hover: false,
      gap: 0.2,
    };
    this.toggleHover = this.toggleHover.bind(this);
  }


  getRandomColor() {
    var hex = '#'+Math.random().toString(16).substr(-6); 
    this.setState({
      next: hex
    })
  }

  getSimilarColor(){
    var hsl = tinycolor(this.state.next).toHsl();
    var color1 = Object.assign({}, hsl);
    color1.l += this.state.gap;
    var color2 = Object.assign({}, hsl);
    color2.l -= this.state.gap;
    var color3 = Object.assign({}, hsl);
    color3.s += this.state.gap;
    var color4 = Object.assign({}, hsl);
    color4.s -= this.state.gap;
    var arr = [tinycolor(color1).toHexString(), tinycolor(color2).toHexString(), tinycolor(color3).toHexString(), tinycolor(color4).toHexString()];
    
    this.setState({
      similarColor: arr,
      current: this.state.next
    })
  }

  // getSimilarColor(){
  //   var randomSign = () => {return Math.random() % 2 ===  0 ? true: false;}
  //   var hsl = tinycolor(this.state.answer).toHsl();
  //   randomSign()? hsl.h += this.state.colorGap: hsl.h -= this.state.colorGap;
  //   randomSign()? hsl.s += this.state.shadeGap: hsl.s -= this.state.shadeGap;
  //   randomSign()? hsl.l += this.state.shadeGap: hsl.l -= this.state.shadeGap;
  //   console.log(hsl)
  //   var NewColor = tinycolor(hsl).toHexString();
  //   return NewColor;
  // }

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
    if(this.state.gap < 0.01){
      alert("Impressive! YOU WIN!!");
    } else {
      this.setState({
        gap: this.state.gap * 0.80
      })
      this.getIndex();
      this.getSimilarColor();
      this.getRandomColor();
    }
    
    // if(this.state.normal === this.state.lighter){
    //   alert("Impressive! YOU WIN!!");
    //   this.setState({
    //     size: 2,
    //     gap: .10
    //   })
    // } else {
    //   this.setState({
    //     size: ++this.state.size,
    //     gap: this.state.gap * 0.80
    //   })
    // }
    // this.getIndex();
    // this.getColor();
  }

  incorrect() {
    this.setState({
      gap: 0.2
    })
    this.getIndex();
    this.getSimilarColor();
    this.getRandomColor();
    window.alert('Wrong tile! YOU LOSE!!');
  }

  render() {
    //Make rows
    var rows = []
    for(var i=0; i<this.state.size; i++){
      rows.push(<Row onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
       <MatchColume correct={this.correct.bind(this)} incorrect={this.incorrect.bind(this)} index={this.state.index} rowInd={i} size={this.state.size} hover={this.state.hover} answer={this.state.current} similarColor={this.state.similarColor}/>
      </Row>)
    }

    return (
      <Grid>
      <Row>
      <Col md={12}>
      <div id='minigame'>
        <h1>Match Game</h1>
        <h5>Select same colored tile</h5>
        <MatchThis color={this.state.current}/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='game'>{rows}</div>
      </div>
      </Col>
      </Row>
      </Grid>
    )
  }
}


module.exports = MatchGame;
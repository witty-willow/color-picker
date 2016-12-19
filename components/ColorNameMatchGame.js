import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import tinycolor from 'tinycolor2';
// import ReactCountdownClock from 'react-countdown-clock';


class ColorNameMatchGame extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 'RED',
      hex: "#ff0000",
      colors: ["RED", "BLUE", "GREEN", "YELLOW", "BLACK", "GRAY", "PURPLE", "PINK"],
      hover: false,
      level: 1
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  randomInd () {
    return Math.floor(Math.random()*8);
  }

  getRandomColor() {
    var match;
    Math.round(Math.random()) ? match = true : match = false;
    var randomInd1 = this.randomInd();
    var newColorName = this.state.colors[randomInd1];

    var hex;
    if(match){
      hex = '#' + tinycolor(newColorName).toHex();
    } else {
      var randomInd2 = this.randomInd();
      hex = '#' + tinycolor(this.state.colors[randomInd2]).toHex();
    }
    this.setState({
      current: newColorName,
      hex: hex
    })
    console.log(this.state.current, tinycolor(hex).toName())
  }

  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  match() {
    var currentNamehex = '#' + tinycolor(this.state.current).toHex(); 
    currentNamehex === this.state.hex ? this.correct() : this.incorrect();
  }

  unmatch() {
    var currentNamehex = '#' + tinycolor(this.state.current).toHex(); 
    currentNamehex === this.state.hex ? this.incorrect() : this.correct();
  }

  correct() {
    if(this.state.level === 5){
      window.alert('Hidden Game Unlocked!!');
       this.props.unlock();
    } else {
      this.getRandomColor();
      this.setState({
        level: ++this.state.level
      })
    }
  }

  incorrect() {
    window.alert('Wrong! YOU LOSE!!');
    this.getRandomColor();
    this.setState({
      level: 1
    })
  }

  // timeRunOut() {
  //   this.setState({
  //     level: 1
  //   })
  //   window.alert('Time Over!!');
  //   this.getRandomColor();
  // }

  render() {

    return (
      <Grid>
      <Row>
      <Col md={12}>
      <div id='ColorNameMatchGame'>
        <h1>Color & Name Match Game</h1>
        <h5>Does color & name match?</h5>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='game'>
          <div className='colorName'>
          <h1 style={{color:this.state.hex}}>{this.state.current}</h1>
          <button onClick={this.match.bind(this)}>Match</button>
          <button onClick={this.unmatch.bind(this)}>Unmatch</button>
          </div>
        </div>
      </div>
      </Col>
      </Row>
      </Grid>
    )
  }
}


module.exports = ColorNameMatchGame;
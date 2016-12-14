import React from 'react';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe'
import $ from 'jquery';

class Templates extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props.colors)

    this.state = {
      obj1: { backgroundColor: props.colors.color1 },
      obj2: { 'padding-top': '50px', 'padding-bottom': '50px', backgroundColor: props.colors.color2 },
      obj3: { color: props.colors.color3 },
      obj4: { color: props.colors.color4 },
      obj5: { backgroundColor: props.colors.color5, padding: '10px'}
    }
  }

  render() {
    return (
      <div className='container modal-content'>
        <div className='panel example-template'>
          <div className='panel-body'>
            <div className='row' style={this.state.obj1}>
            <div className='row-height'>
              <div className='col-md-6 col-sm-6' style={this.state.obj2}>
                <h3 style={this.state.obj3}>Sample Resume Template</h3>
                <button className='label label-info'>Button1</button>   
                <button className='label label-info'>Button2</button>
                <br></br><br></br>
                <div style={this.state.obj5}>
                <h5 style={this.state.obj4}><b>Demo:</b> Loruem asdfjh tasmen add. React tempasd with caosr.</h5>
                <h5 style={this.state.obj4}><b>Information:</b> Loruem asdfjh tasmen add. React tempasd with caosr.</h5>
                </div>
              </div>
              <div className='col-md-6 col-sm-6 col-height'>
                <div>
                  <h4 style={this.state.obj5}>Lorem Ipsum</h4>
                  <div className='thumbnail'>
                    <img src='http://netdna.webdesignerdepot.com/uploads/2012/03/lipsum1.jpg'></img>
                  </div>
                  <br></br>
                  <a href='#'>Link ahsdf sane</a>
                  <br></br>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


module.exports = Templates;
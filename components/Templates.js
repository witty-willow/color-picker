import React from 'react';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe'
import $ from 'jquery';

var colors = {
  c1: '#87CA80',
  c2: '#95D68E',
  c3: '#E6ACB6',
  c4: '#E7BEAF',
  c5: '#E9D9B2'
}

var obj1 = {
  backgroundColor: colors.c1
}

var obj2 = {
  height: '100%',
  'backgroundColor': colors.c2
}

var obj3 = {
  'color': colors.c3
}

var obj4 = {
  'color': colors.c4
}

var obj5 = {
  backgroundColor: colors.c5
}

var white = {
  'background-color': '#FFFFFF'
}

class Templates extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container' borderColor={colors.c1}>
        <div className='panel'>
          <div className='panel-body'>
            <div className='row' style={obj1}>
              <div className='col-md-6 col-sm-6' style={obj2}>
                <h1 style={obj3}>Sample Resume Template</h1>
                <button className='label label-info'>Button1</button>   
                <button className='label label-info'>Button2</button>
                <br></br>
                <h3 style={obj4}><b>Demo:</b> Loruem asdfjh tasmen add. React tempasd with caosr.</h3>
                <h3 style={obj4}><b>Information:</b> Loruem asdfjh tasmen add. React tempasd with caosr.</h3>
              </div>
              <div className='col-md-6 col-sm-6 col-height'>
                <div>
                  <h4 style={obj5}>Lorem Ipsum</h4>
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
    )
  }
}


module.exports = Templates;
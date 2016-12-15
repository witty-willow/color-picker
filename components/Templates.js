import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Templates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj1: { backgroundColor: props.colors.color1.hex },
      obj2: { 'padding-top': '50px', 'padding-bottom': '50px', backgroundColor: props.colors.color2.hex },
      obj3: { color: props.colors.color3.hex },
      obj4: { color: props.colors.color4.hex },
      obj5: { backgroundColor: props.colors.color5.hex, padding: '10px'}
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
                <h3 style={this.state.obj3}>Sample Template</h3>
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
                  <div style={this.state.obj3} className='thumbnail'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lacus dignissim, lacinia ipsum ut, rhoncus est. Donec cursus molestie lacus, sit amet interdum nulla mollis eu. Nulla viverra eu sapien et rhoncus. Quisque libero tellus, molestie id auctor non, accumsan aliquet enim. Donec id mauris hendrerit, malesuada enim eu, ullamcorper lectus. Donec eleifend sodales nisl, at dapibus sem posuere ut. Sed dictum neque erat. Mauris venenatis tellus et nunc faucibus feugiat. Nulla placerat id turpis et vestibulum. Quisque nunc nunc, tristique et massa at, venenatis venenatis est. Cras sed neque hendrerit, blandit risus ac, interdum augue.</p>
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
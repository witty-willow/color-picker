// Chat.jsx

import React from 'react';
import io from 'socket.io-client';
let socket = io(`http://localhost:3000`);
import { Button } from 'react-bootstrap';


class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  componentDidMount() {
    socket.on('chat message', data => {
      this.setState({text: data});
      console.log('in componentDidMount');
    });
  }


  handleSubmit (e) {
    e.preventDefault();
    // this.setState({text: ''});

  }

  changeHandler (e) {
    // this.setState({text: e.target.value});
    socket.emit('chat message', e.target.value);

  }

  render() {

    console.log('chat render');
    return (
      <div className="sidebar-content">
        <h5>Click a Code to Copy!</h5>
        <Button>Hide Sidebar</Button>
        <div className="color-family-info">
          <h2>Inside Color-Family-Info</h2>

        <div className="chat">
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.changeHandler}
                value={this.state.text} />
          </form>
          <div>
            {this.state.text}
       
          </div>
        </div>
       </div>
     </div>
    );
  }

}

module.exports = Chat;
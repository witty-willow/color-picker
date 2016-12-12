import React from 'react';
import ColorFamily from './ColorFamily.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FilterBar from './FilterBar.js';
import {Jumbotron, Button} from 'react-bootstrap';


class ColorFamilyView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-wrap">
        <center>
        <Button onClick={this.props.toggleSidebar}>
          Toggle Sidebar
        </Button>
        </center>

        {this.props.colorFamilies.map(function(obj, index) {
        return(
          <ReactCSSTransitionGroup
            transitionName='fade'
            transitionAppear={true}
            transitionAppearTimeout={3000}
            transitionEnter={false}
            transitionLeave={false}
            key={index}>
            <ColorFamily setCurrentFamily={this.props.setCurrentFamily} onClick={this.props.toggleSidebar} colorFamily={obj} />
          </ReactCSSTransitionGroup>
          )
        }.bind(this))}
     </div>
    );
  }

}

module.exports = ColorFamilyView;
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
      <div className="container">
        <FilterBar />
        {this.props.colorFamilies.map(function(obj, index) {
          return (
            <ReactCSSTransitionGroup 
              transitionName='fade'
              transitionAppear={true}
              transitionAppearTimeout={3000}
              transitionEnter={false}
              transitionLeave={false}>
            <ColorFamily colorFamily={obj} key={index} />
            </ReactCSSTransitionGroup>
          )
        })}   
      </div>

    );
  }

}

module.exports = ColorFamilyView;
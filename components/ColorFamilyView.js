import React from 'react';
import ColorFamily from './ColorFamily.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ColorFamilyView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ReactCSSTransitionGroup 
      transitionName='example'
      transitionAppear={true}
      transitionAppearTimeout={3000}
      transitionEnter={false}
      transitionLeave={false}>
        
          {this.props.colorFamilies.map(function(obj, index) {
            return <ColorFamily colorFamily={obj} key={index} />
          })}
        
      </ReactCSSTransitionGroup>
    );
  }

}

module.exports = ColorFamilyView;
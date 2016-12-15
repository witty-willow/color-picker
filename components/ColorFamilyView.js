import React from 'react';
import ColorFamily from './ColorFamily.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FilterBar from './FilterBar.js';
import {Jumbotron, Button, Grid, Row, Col} from 'react-bootstrap';


class ColorFamilyView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-wrap">
        {this.props.colorFamilies.map(function(obj, index) {
        return (
          <Grid key={index}>
            <Row>
              <ReactCSSTransitionGroup
                transitionName='fade'
                transitionAppear={true}
                transitionAppearTimeout={3000}
                transitionEnter={false}
                transitionLeave={false}
                key={index}>
                <Col xs={12} md={12}>
                  <h5>{obj.name}</h5>
                </Col>
                <Col xs={12} md={12}>
                  <ColorFamily setCurrentFamily={this.props.setCurrentFamily} toggleSidebarOn={this.props.toggleSidebarOn} colorFamily={obj} />
                </Col>
              </ReactCSSTransitionGroup>
            </Row>
          </Grid>
          )
        }.bind(this))}
     </div>
    );
  }

}

module.exports = ColorFamilyView;
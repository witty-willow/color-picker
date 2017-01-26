import React from 'react';
import ReactDOM from 'react-dom';
import {Col} from 'react-bootstrap';
import SingleBlock from './singleBlock.js';
import $ from 'jquery';

var Colume = (props) => {
  var gameDimensions = $('#minigame').width();
  var width = props.size * 100 > gameDimensions? gameDimensions/props.size + 'px' : '100px';
  var columes = [];
  for(var i=0; i<props.size; i++){
    var key = props.rowInd * props.size + i + 1;
    if(key === props.index){
      columes.push(<SingleBlock width={width} key={key} hover={props.hover} color={props.lighter} click={props.correct}/>)
    } else {
      columes.push(<SingleBlock width={width} key={key} hover={props.hover} color={props.normal} click={props.incorrect}/>)
    }
  }

  return (
    <Col>{columes}</Col>
  )
}


module.exports = Colume;
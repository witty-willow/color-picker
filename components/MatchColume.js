import React from 'react';
import ReactDOM from 'react-dom';
import {Col} from 'react-bootstrap';
import MatchSingle from './MatchSingle.js';
import $ from 'jquery';

var MatchColume = (props) => {
  var gameDimensions = $('#minigame').width();
  var width = props.size * 100 > gameDimensions? gameDimensions/props.size + 'px' : '100px';
  var columes = [];
  for(var i=0; i<props.size; i++){
    var key = props.rowInd * props.size + i + 1;
    if(key === props.index){
      columes.push(<MatchSingle width={width} key={key} hover={props.hover} color={props.answer} click={props.correct}/>)
    } else {
      columes.push(<MatchSingle width={width} key={key} hover={props.hover} color={props.similarColor[i]} click={props.incorrect}/>)
    }
  }

  return (
    <Col>{columes}</Col>
  )
  return (
    <Col>{columes}</Col>
  )
}


module.exports = MatchColume;
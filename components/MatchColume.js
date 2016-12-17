import React from 'react';
import ReactDOM from 'react-dom';
import {Col} from 'react-bootstrap';
import MatchSingle from './MatchSingle.js';

var MatchColume = (props) => {
  var columes = [];
  for(var i=0; i<props.size; i++){
    var key = props.rowInd * props.size + i + 1;
    if(key === props.index){
      columes.push(<MatchSingle key={key} hover={props.hover} color={props.lighter} click={props.correct}/>)
    } else {
      columes.push(<MatchSingle key={key} hover={props.hover} color={props.normal} click={props.incorrect}/>)
    }
  }

  return (
    <Col>{columes}</Col>
  )
}


module.exports = MatchColume;
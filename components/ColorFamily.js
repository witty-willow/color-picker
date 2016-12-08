import {Table} from 'react-bootstrap';

import React from 'react';


var ColorFamily = (props) => (
  <Table>
    <tbody>
      <tr><td>{props.colorFamily[0]}</td></tr>
      <tr><td>{props.colorFamily[1]}</td></tr>
      <tr><td>{props.colorFamily[2]}</td></tr>
      <tr><td>{props.colorFamily[3]}</td></tr>
      <tr><td>{props.colorFamily[4]}</td></tr>
    </tbody>
  </Table>
);

module.exports = ColorFamily
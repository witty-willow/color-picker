import {Table} from 'react-bootstrap';

var colorFamilyComponent = (props) => (
  <Table>
    <tbody>
      <tr>{props.colorFamily[0]}</tr>
      <tr>{props.colorFamily[1]}</tr>
      <tr>{props.colorFamily[2]}</tr>
      <tr>{props.colorFamily[3]}</tr>
      <tr>{props.colorFamily[4]}</tr>
    </tbody>
  </Table>
);

window.colorFamilyComponent = colorFamilyComponent;
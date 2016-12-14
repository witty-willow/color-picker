import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';

import React from 'react';

var Preview = (props) => {

  var onFilterClick = (e) => {
    props.handleStateChange(e);
  };

  return (
    <div id="container">
      <main id="center" class="column">
        <article>
          <h1>Heading</h1>
        </article>
      </main>
      <nav id="left" class="column">
        <h3>Left heading</h3>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
          <li><a href="#">Link 5</a></li>
        </ul>
        <h3>Left heading</h3>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
          <li><a href="#">Link 5</a></li>
        </ul>
      </nav>
      <div id="right" class="column">
        <h3>Right heading</h3>
      </div>
    <div id="footer-wrapper">
      <footer id="footer"><p>Footer...</p></footer>
    </div>
  </div>
  );
};


module.exports = Preview;

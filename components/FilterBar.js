import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

import React from 'react';

var FilterBar = (props) => {

  var onFilterClick = (e) => {
    //change to reflect function and state labels in main App
    props.handleStateChange(props.selectedFilter)
  }

  return (
    <Nav activeKey='1.4' bsStyle='pills' onSelect={onFilterClick}>
      <NavDropdown eventKey='1' title='Dropdown' id='nav-dropdown'>
        <MenuItem eventKey='1.1' title='menuItem'>Today</MenuItem>
        <MenuItem eventKey='1.2' title='menuItem'>This Week</MenuItem>
        <MenuItem eventKey='1.3' title='menuItem'>This Month</MenuItem>
        <MenuItem eventKey='1.4' title='menuItem'>All-Time</MenuItem>
      </NavDropdown>
      <NavItem title='Item' eventKey='2'>Blue</NavItem>
      <NavItem title='Item' eventKey='3'>Red</NavItem>
      <NavItem title='Item' eventKey='4'>Yellow</NavItem>
      <NavItem title='Item' eventKey='5'>Green</NavItem>
    </Nav>
  )
}


module.exports = FilterBar;
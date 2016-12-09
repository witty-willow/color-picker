import {Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

import React from 'react';

var FilterBar = (props) => {

  var onFilterClick = (e) => {
    props.handleStateChange(e)
  }

  return (
    <Nav activeKey='allTime' bsStyle='pills' onSelect={onFilterClick}>
      <NavDropdown eventKey='mostClicked' title='Dropdown' id='nav-dropdown'>
        <MenuItem eventKey='today' title='menuItem'>Today</MenuItem>
        <MenuItem eventKey='thisWeek' title='menuItem'>This Week</MenuItem>
        <MenuItem eventKey='thisMonth' title='menuItem'>This Month</MenuItem>
        <MenuItem eventKey='allTime' title='menuItem'>All-Time</MenuItem>
      </NavDropdown>
      <NavItem title='blue' eventKey='2'>Blue</NavItem>
      <NavItem title='red' eventKey='3'>Red</NavItem>
      <NavItem title='yellow' eventKey='4'>Yellow</NavItem>
      <NavItem title='green' eventKey='5'>Green</NavItem>
    </Nav>
  )
}


module.exports = FilterBar;
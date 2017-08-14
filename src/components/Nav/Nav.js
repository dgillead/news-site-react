import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Nav extends Component {
  render() {
    return (
      <nav>
        { this.props.navItems.map((item) => {
          return <Button key={item.label}><a href="#" onClick={ () => this.props.handleNavClick(item.value) }>{' '}{item.label}</a></Button>
        }) }
      </nav>
    )
  }
}

export default Nav;

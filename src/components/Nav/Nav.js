import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
        { this.props.navItems.map((item) => {
          return <a key={item.label} href="#" onClick={ () => this.props.handleNavClick(item.value) }>{' '}{item.label}</a>
        }) }
      </nav>
    )
  }
}

export default Nav;

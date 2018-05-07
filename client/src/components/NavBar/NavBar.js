import React from 'react';
import './navbar.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export default class NavBar extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Placenta Findings</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  {/* <NavLink href="/components/">Components</NavLink> */}
                  <NavLink href="/new">Add new record</NavLink>
                </NavItem>
                <NavItem>
                  {/* <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink> */}
                  <NavLink href="/search">Search record</NavLink>
                </NavItem>
                <NavItem>
                  {/* <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink> */}
                  <NavLink href="/edit">Edit record</NavLink> 
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

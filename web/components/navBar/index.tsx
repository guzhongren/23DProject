/**
 * ../routers.tsx
 */

import  * as React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
export interface Props {
    projectName?: string
}
interface States {
    projectName?: string,
    isOpen?: boolean
}
export class ProjectNavBar extends React.Component<Props, States> {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        projectName: this.props.projectName? this.props.projectName: "测试框架",
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
        <Navbar color="faded" dark expand="md">
          <NavbarBrand href="/">{this.state.projectName}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Nav className="ml-auto" >
              <NavItem>
                <NavLink href="/mapbox">Mapbox</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Deck.gl">Deck.gl</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
    );
  }
}
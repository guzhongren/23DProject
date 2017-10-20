/**
 * ../routers.tsx
 */

import * as React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, DropdownToggle, NavDropdown, DropdownMenu, DropdownItem } from 'reactstrap';
export interface Props {
    projectName?: string
}
interface States {
    projectName?: string,
    isOpen?: boolean,
    isDropdownOpen?: boolean
}
export class ProjectNavBar extends React.Component<Props, States> {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            projectName: this.props.projectName ? this.props.projectName : "测试框架",
            isOpen: false,
            isDropdownOpen: false
        };
    };

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    render() {
        return (
            <Navbar color="faded" dark expand="md">
                <NavbarBrand href="/">{this.state.projectName}</NavbarBrand>
                <Nav className="ml-auto" >
                <NavItem>
                        <NavLink href="/circle">circle</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Deck.gl">Deck.gl</NavLink>
                    </NavItem>
                </Nav>

            </Navbar>
        );
    }
}
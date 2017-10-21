/**
 * ../routers.tsx
 */

import * as React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, DropdownToggle, NavDropdown, DropdownMenu, DropdownItem } from 'reactstrap';
export interface Props {
    projectConfig?: any
}
interface States {
    projectConfig?: any,
    isOpen?: boolean,
    isDropdownOpen?: boolean
}
export class ProjectNavBar extends React.Component<Props, States> {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            projectConfig: this.props.projectConfig,
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
            <Navbar color="faded" inverse expand="md">
                <NavbarBrand href="/">{this.state.projectConfig.name}</NavbarBrand>
                <Nav className="ml-auto">
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
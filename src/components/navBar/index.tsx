/**
 * ../routers.tsx
 */
import * as React from 'react';
// import { Button, NavDropdown, MenuItem, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'react-bootstrap';
import { Row, Col, Button, Menu, Dropdown, Icon } from 'antd';
import "./style/index.less";
export interface Props {
    projectConfig?: any
}
interface States {
    projectConfig?: any,
    isOpen?: boolean,
    isDropdownOpen?: boolean
}
export default class ProjectNavBar extends React.Component<Props, States> {
    constructor(props) {
        super(props);

        // this.toggle = this.toggle.bind(this);
        // this.state = {
        //     projectConfig: this.props.projectConfig,
        //     isOpen: false,
        //     isDropdownOpen: false
        // };
    };

    // toggle() {
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    // };
    render() {
        const deckglMenu = (
            <Menu>
                <Menu.Item>
                    <a href="deckgl">DeckGl</a>
                </Menu.Item>
            </Menu>
        )
        const menu = (
            <Menu>
                <Menu.Item>
                    <a  href="circle">mapbox3D</a>
                </Menu.Item>
                <Menu.Item>
                    <a  href="mapbox3D">mapbox3D</a>
                </Menu.Item>
            </Menu>
        );
        return (
            <Row className="projectNavBar">
                <Col span={6}><a>{this.props.projectConfig.name}</a></Col>
                <Col span={6}>col-6</Col>
                <Dropdown overlay={deckglMenu}>
                    <a  href="#">Deck.gl <Icon type="down" />
                    </a>
                </Dropdown>
                <Dropdown overlay={menu}>
                    <a  href="#">Mapbox <Icon type="down" />
                    </a>
                </Dropdown>
            </Row>
        );
    }
}
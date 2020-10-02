import React, { Component, Fragment } from "react";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog } from "@fortawesome/free-solid-svg-icons";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../media/css/sidenav.css";

export const SIDEBAR_OPTIONS = { HOME: "HOME", SETTINGS: "SETTINGS" };

export default class PageSideNav extends Component {
    constructor(props) {
        super();
        this.state = {
            pageName: props.pageName,
        };
    }

    changeSelectedItem = (page_type) => {
        this.setState({
            pageName: page_type,
        });
    };

    goToPage(route) {
        window.location = `${window.location.origin}/${route}`;
    }

    render() {
        return (
            <SideNav
                className="page_side_nav"
                // onSelect={("home") => {
                //     // Add your code here
                // }}
            >
                <SideNav.Toggle />
                <SideNav.Nav>
                    <NavItem
                        eventKey="home"
                        className={this.state.pageName === SIDEBAR_OPTIONS.HOME ? "selected_side_nav" : ""}
                        onClick={() => this.goToPage("home")}
                    >
                        <NavIcon>
                            {/* <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} /> */}
                            <FontAwesomeIcon
                                className={this.state.pageName === SIDEBAR_OPTIONS.HOME ? "selected_icon" : "side_nav_icon"}
                                icon={faHome}
                            />
                        </NavIcon>
                        <NavText>
                            <span className={this.state.pageName === SIDEBAR_OPTIONS.HOME ? "selected_icon" : "side_nav_icon"}>Home</span>
                        </NavText>
                    </NavItem>
                    <NavItem
                        eventKey="charts"
                        className={this.state.pageName === SIDEBAR_OPTIONS.SETTINGS ? "selected_side_nav" : ""}
                        onClick={() => this.goToPage("settings")}
                    >
                        <NavIcon>
                            {/* <i className="fa fa-fw fa-line-chart" style={{ fontSize: "1.75em" }} /> */}
                            <FontAwesomeIcon
                                className={this.state.pageName === SIDEBAR_OPTIONS.SETTINGS ? "selected_icon" : "side_nav_icon"}
                                icon={faCog}
                            />
                        </NavIcon>
                        <NavText>
                            <span className={this.state.pageName === SIDEBAR_OPTIONS.SETTINGS ? "selected_icon" : "side_nav_icon"}>Settings</span>
                        </NavText>
                        {/* <NavItem eventKey="charts/linechart">
                            <NavText>
                                <span className="nav_items">Line Chart</span>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts/barchart">
                            <NavText>
                                <span className="nav_items">Bar Chart</span>
                            </NavText>
                        </NavItem> */}
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        );
    }
}

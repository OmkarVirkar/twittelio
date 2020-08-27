import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../../media/css/home.css";
import { Header } from "../../common/Header";
import PageSideNav from "../../common/sideNav";

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <PageSideNav />
            </Fragment>
        );
    }
}

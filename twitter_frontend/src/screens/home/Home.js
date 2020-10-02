import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../../media/css/home.css";
import { Header } from "../../common/Header";
import PageSideNav from "../../common/sideNav";
import { SIDEBAR_OPTIONS } from "../../common/sideNav";
const dotenv = require("dotenv");

export default class Home extends Component {
    constructor() {
        super();
    }
    render() {
        console.log(dotenv);
        return (
            <Fragment>
                <Header />
                <table className="w-100">
                    <tbody className="w-100">
                        <tr className="w-100">
                            <td className="nav-bar-width">
                                <PageSideNav pageName={SIDEBAR_OPTIONS.HOME} />
                            </td>
                            <td className="content-body-width">
                                <div className="ml-5">Hello</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

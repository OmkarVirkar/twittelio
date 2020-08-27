import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../../media/css/loginPage.css";

export default class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        };
    }

    changeloginFields(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Fragment>
                <div id="parent_login_div" className="shadow pb-4">
                    <div>
                        <FontAwesomeIcon className="d-inline-block feather_icon" icon={faFeather} />
                        <h1 className="d-inline-block login_header_name">Login</h1>
                    </div>
                    <div className="main_login_div container">
                        <input
                            id="username"
                            name="username"
                            className="inputFields"
                            placeholder="username"
                            type="text"
                            value={this.state.username}
                            onChange={(e) => this.changeloginFields(e)}
                        />
                        <br />
                        <input
                            id="password"
                            name="password"
                            className="inputFields"
                            placeholder="password"
                            type="password"
                            value={this.state.password}
                            onChange={(e) => this.changeloginFields(e)}
                        />
                    </div>
                    <div className="">
                        <button className="btn btn-warning cancel_button login_buttons">Cancel</button>
                        <button className="btn btn-dark sign_in_button login_buttons">Sign In</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../../media/css/loginPage.css";
import { checkUser } from "../../media/js/login";
const dotenv = require("dotenv");
const loginMessages = require("../../config").LOGIN_MESSAGES;

export default class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        };
    }

    changeloginFields = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    resetFeilds = () => {
        this.setState({
            username: "",
            password: "",
            showWarning: false,
            warningMessage: "",
        });
    };

    setUsernameAnsPasswordInSession(username, password, response) {
        localStorage.setItem(
            "twittelio_session",
            JSON.stringify({
                session_stutus: true,
                username,
                password,
                userId: response.result.userId,
            })
        );
    }

    componentDidMount = () => {
        let twittelioDetails = localStorage.getItem("twittelio_session");
        if (twittelioDetails != null) {
            twittelioDetails = JSON.parse(twittelioDetails);
            if (twittelioDetails.username && twittelioDetails.password && twittelioDetails.session_stutus == true) {
                this.setState({
                    username: twittelioDetails.username,
                    password: twittelioDetails.password,
                    cookie_login: true,
                });
            }
        }
    };

    componentDidUpdate() {
        let { username, password, cookie_login } = this.state;
        if (username != "" && password != "" && cookie_login == true) {
            this.loginHandler();
        }
    }

    loginHandler = () => {
        let { username, password } = this.state;
        username = username.trim();
        password = password.trim();
        if (username !== "" || password !== "") {
            checkUser(username, password)
                .then((result) => {
                    if (result.message == loginMessages.USER_FOUND) {
                        /* dotenv.SESSION_USERNAME = this.state.username;
                        dotenv.SESSION_PASSWORD = this.state.password; */
                        this.setUsernameAnsPasswordInSession(this.state.username, this.state.password, result);
                        window.location = window.location.origin + "/home/";
                    } else if (result.message == loginMessages.USER_NOT_FOUND) {
                        this.showWarningMessage("User does not exists");
                    }
                })
                .catch((err) => {
                    this.showWarningMessage("Error Occured");
                });
        } else {
            // alert(`Please fill all fields`);
            this.showWarningMessage("Please enter all fields");
        }
    };

    showWarningMessage = (message) => {
        this.setState({
            showWarning: true,
            warningMessage: message,
        });
    };

    render() {
        return (
            <Fragment>
                <div id="parent_login_div" className="shadow pb-4">
                    <div>
                        <FontAwesomeIcon className="d-inline-block feather_icon" icon={faFeather} />
                        <h1 className="d-inline-block login_header_name">Login</h1>
                    </div>
                    <label className={this.state.showWarning ? "text-danger text-center w-100" : "pt-2 invisible"}>
                        <FontAwesomeIcon className="text-danger d-inline-block" style={{ fontSize: "1.3rem" }} icon={faInfoCircle} />
                        {this.state.warningMessage}
                    </label>
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
                        <button className="btn btn-warning cancel_button login_buttons" onClick={() => this.resetFeilds()}>
                            Cancel
                        </button>
                        <button className="btn btn-dark sign_in_button login_buttons" onClick={() => this.loginHandler()}>
                            Sign In
                        </button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

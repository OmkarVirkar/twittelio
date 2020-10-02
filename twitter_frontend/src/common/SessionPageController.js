import React, { Component, Fragment } from "react";
import { checkSession, signOut } from "../media/js/login";
const loginMessages = require("../config").LOGIN_MESSAGES;

export default class SessionPageController extends Component {
    componentWillMount() {
        checkSession().then((result) => {
            if (result == loginMessages.GO_BACK_TO_LOGIN) {
                window.location = window.location.origin + "/login";
            } else if (result == loginMessages.TRIGGER_LOGOUT) {
                signOut().then((result) => {
                    window.location = window.location.origin + "/login";
                });
            }
        });
    }

    render() {
        return <Fragment></Fragment>;
    }
}

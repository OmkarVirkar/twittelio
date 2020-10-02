import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../media/css/header.css";
import SessionPageController from "./SessionPageController";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "../media/js/login";

export const Header = () => {
    let chnagePage = (route) => {
        window.location = window.location.origin + "/home";
    };

    let logoutUser = () => {
        signOut().then((res) => {
            localStorage.removeItem("twittelio_session");
            window.location = window.location.origin + "/login";
        });
    };

    let twittelioDetails = localStorage.getItem("twittelio_session");
    if (twittelioDetails == null) {
        window.location = window.location.origin + "/login";
    }

    return (
        <div className="header-bar shadow-sm">
            <SessionPageController />
            <FontAwesomeIcon className="d-inline-block feather_icon m-auto header_links" icon={faFeather} onClick={() => chnagePage("/")} />
            <h3 className="d-inline-block mb-0 header_links" onClick={() => chnagePage("/")}>
                Twittleio
            </h3>
            <h4 className="d-inline-block float-right mb-0 header_links logout_button" onClick={() => logoutUser()}>
                logout
            </h4>
        </div>
    );
};

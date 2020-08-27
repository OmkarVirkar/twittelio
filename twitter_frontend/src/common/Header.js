import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../media/css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    let chnagePage = (route) => {
        window.location = route;
    };
    return (
        <div className="header-bar shadow-sm">
            <FontAwesomeIcon className="d-inline-block feather_icon m-auto header_links" icon={faFeather} onClick={() => chnagePage("/")} />
            <h3 className="d-inline-block mb-0 header_links" onClick={() => chnagePage("/")}>
                Twittleio
            </h3>
            <h4 className="d-inline-block float-right mb-0 header_links logout_button">logout</h4>
        </div>
    );
};

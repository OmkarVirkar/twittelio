import React, { Component, Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../../media/css/home.css";
import "./settings.css";
import { Header } from "../../common/Header";
import PageSideNav from "../../common/sideNav";
import { SIDEBAR_OPTIONS } from "../../common/sideNav";
const dotenv = require("dotenv");

export default class Settings extends Component {
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
                                <PageSideNav pageName={SIDEBAR_OPTIONS.SETTINGS} />
                            </td>
                            <td className="content-body-width">
                                <div className="ml-3 mr-3 component card mt-3">
                                    <SettingsDiv />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const settingsOption = { ACCOUNT: "account", TEMP: "temp" };
let SettingsDiv = () => {
    let [settingState, setSettingPage] = useState(settingsOption.ACCOUNT);

    let detaultTabCss = "h4 tab-item mt-0 mb-0 ml-3 mr-0 pb-1";
    return (
        <Fragment>
            <div>
                <ul className="pl-0 m-0 tab-option d-inline-flex mt-3">
                    <li
                        className={settingState == settingsOption.ACCOUNT ? `active_option ${detaultTabCss}` : `${detaultTabCss}`}
                        onClick={() => setSettingPage(settingsOption.ACCOUNT)}
                    >
                        Account settings
                    </li>
                    <li
                        className={settingState == settingsOption.TEMP ? `active_option ${detaultTabCss}` : `${detaultTabCss}`}
                        onClick={() => setSettingPage(settingsOption.TEMP)}
                    >
                        temp
                    </li>
                </ul>
            </div>
            <div>{settingState == settingsOption.ACCOUNT ? <AccountSetting /> : ""}</div>
        </Fragment>
    );
};

let AccountSetting = () => {
    return (
        <div className="row">
            <div className="col-5">
                <div>Temp</div>
            </div>
            <div className="col-7"></div>
        </div>
    );
};

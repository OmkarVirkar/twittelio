import React, { Component, Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "../../media/css/home.css";
import "./settings.css";
import { Header } from "../../common/Header";
import PageSideNav from "../../common/sideNav";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { SIDEBAR_OPTIONS } from "../../common/sideNav";
const avatarImage = require(`../../media/images/user_avatar_image.png`);
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
    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
    }));
    return (
        <div className="row" style={{width:"100%", margin:"0%"}}>
            <div className="col-2" style={{'display':"inline-table"}}>
                <div style={{'padding':'0.9rem'}}>
                    <img src={avatarImage} alt="Avatar" className="mt-2 mb-2 avatar"></img>
                </div>
            </div>
            <div className="col-10 p-3" style={{borderLeft: '1px solid #ececec'}}>
                <ul id="user_filds" >
                    <li className="user_filds_li_item d-inline-block mt-3">
                        <TextField
                            id="standard-read-only-input"
                            label="User name"
                            defaultValue="username"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </li>
                    <li className="user_filds_li_item d-inline-block mt-3">
                        <TextField
                            id="standard-read-only-input"
                            label="Email Id"
                            defaultValue=""
                            InputProps={{
                                readOnly: false,
                            }}
                        />
                    </li>
                    <li className="user_filds_li_item d-inline-block mt-3">
                        <TextField
                            id="standard-read-only-input"
                            label="First name"
                            defaultValue=""
                            InputProps={{
                                readOnly: false,
                            }}
                        />
                    </li>
                    <li className="user_filds_li_item d-inline-block mt-3">
                        <TextField
                            id="standard-read-only-input"
                            label="Last name"
                            defaultValue=""
                            InputProps={{
                                readOnly: false,
                            }}
                        />
                    </li>

                    <li className="user_filds_li_item d-inline-block mt-3">
                        <TextField
                            id="standard-read-only-input"
                            label="password"
                            defaultValue="password"
                            type="password"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </li>
                    <li className="user_filds_li_item d-inline-block mt-3">
                        <button className="btn btn-warning shadow-sm" style={{marginTop: '4%'}}>Reset password</button>
                    </li>
                </ul>
                <button className="btn btn-success shadow-sm" style={{marginTop: '4%',marginLeft: '3%'}}>Save</button>
            </div>
        </div>
    );
};

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./screens/login_page/LoginPage";
import Home from "./screens/home/Home";
import Settings from "./screens/settings/settings";

const routing = () => {
    // const [color, changeColour] = useState("white");
    return (
        <BrowserRouter>
            <div>
                {/* Route the user to home page */}
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/settings" component={Settings} />

                {/* ROUTES USER TO GL FOLDER VIEW PAGE */}
                {/*  <Route
        path="/glFolder/:sa_id"
        render={props => <GLFolderView {...props} />}
      /> */}
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(routing(), document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

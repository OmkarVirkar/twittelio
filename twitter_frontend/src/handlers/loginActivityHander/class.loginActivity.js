import $ from "jquery";
const BACKEND_BASE_PATH = require("../../config").BACKEND_BASE_PATH;

class LoginActivity {
    checkUser(userName, password) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: BACKEND_BASE_PATH + "/login-acitvity/signInUser",
                data: {
                    userName,
                    password,
                },
                async: true,
                crossDomain: true,
                success: function (response) {
                    console.log(response);
                    resolve(response);
                },
                error: function (response) {
                    reject(response);
                },
            });
        });
    }

    logOutUser() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: BACKEND_BASE_PATH + "/login-acitvity/signOutUser",
                async: true,
                crossDomain: true,
                dataType: "dataType",
                success: function (response) {
                    resolve(response);
                },
                error: function (response) {
                    reject(response);
                },
            });
        });
    }

    checkSession() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: BACKEND_BASE_PATH + "/login-acitvity/checkSession",
                async: true,
                crossDomain: true,
                success: function (response) {
                    resolve(response.sessionStatus);
                },
                error: function (response) {
                    reject(response);
                },
            });
        });
    }

    createUser() {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: BACKEND_BASE_PATH + "/login-acitvity/createUser",
                async: true,
                crossDomain: true,
                success: function (response) {
                    resolve(response);
                },
                error: function (response) {
                    reject(response);
                },
            });
        });
    }

    deleteUser(userId) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: BACKEND_BASE_PATH + "/login-acitvity/deleteUser",
                async: true,
                data: {
                    userId,
                },
                crossDomain: true,
                dataType: "dataType",
                success: function (response) {
                    resolve(response);
                },
                error: function (response) {
                    reject(response);
                },
            });
        });
    }
}

export const LoginActivityObj = new LoginActivity();

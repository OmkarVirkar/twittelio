const userLoginService = require("../../handlers/loginActivityHander/class.loginActivity").LoginActivityObj;
const loginMessages = require("../../config").LOGIN_MESSAGES;

export const checkUser = (username, password) => {
    return new Promise((resolve, reject) => {
        if (username !== "" && password !== "") {
            userLoginService
                .checkUser(username, password)
                .then((result) => {
                    if (result.message === "User Not Found") {
                        resolve({ message: loginMessages.USER_NOT_FOUND, result });
                    } else if (result.statusCode === 200) {
                        resolve({ message: loginMessages.USER_FOUND, result });
                    } else {
                        reject({ message: loginMessages.ERROR_OCCURED, result });
                    }
                })
                .catch((err) => {
                    reject(loginMessages.ERROR_OCCURED);
                });
        }
    });
};

export const signOut = () => {
    return new Promise((resolve, reject) => {
        userLoginService
            .logOutUser()
            .then((result) => {
                resolve();
            })
            .catch((err) => resolve());
    });
};

export const checkSession = () => {
    return new Promise((resolve, reject) => {
        userLoginService
            .checkSession()
            .then((result) => {
                if (result == false) {
                    resolve(loginMessages.GO_BACK_TO_LOGIN);
                } else {
                    resolve(loginMessages.OK);
                }
            })
            .catch((err) => {
                resolve(loginMessages.TRIGGER_LOGOUT);
            });
    });
};

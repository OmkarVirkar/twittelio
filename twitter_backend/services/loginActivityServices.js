const usersRepository = require("../repository/usersRepository");
const mongoose = require("mongoose");

const repository = {
  userRespository: require("../repository/usersRepository"),
};

let signInUser = (request, input) => {
  return new Promise((resolve, reject) => {
    let { userName, password } = input;
    console.log(input);
    repository.usersRepository
      .loginUser(userName, password)
      .then((userData) => {
        if (userData.length == 0) {
          resolve({ statusCode: 404, message: "User Not Found" });
        } else {
          // ToDo: Set session and return loged in success
          let { error, sessionSet } = manageUserSession(request, "createSesion", userData[0].username, userData[0]._id);

          if (sessionSet) {
            resolve({
              statusCode: 200,
              message: "User Found",
              sessionActive: true,
            });
          } else {
            if (error) {
              reject(error);
            }
            resolve({
              statusCode: 500,
              message: "Session Not set",
              sessionActive: false,
            });
          }
        }
      })
      .catch((err) => reject(err));
  });
};

let signOutUser = (request) => {
  return new Promise((resolve, reject) => {
    let { error, sessionSet } = manageUserSession(request, "destroySession", null, null);
    if (!sessionSet) {
      resolve({
        statusCode: 200,
        message: "Session Destroyed",
        sessionActive: false,
      });
    } else {
      if (error) {
        reject(error);
      }
      resolve({
        statusCode: 500,
        message: "Session Not destroyed",
        sessionActive: request.session.userId ? true : false,
      });
    }
  });
};

let createUser = (input) => {
  return new Promise((resolve, reject) => {
    repository.userRespository
      .createUser(input)
      .then((result) => {
        resolve({ statusCode: 200, message: "User Created" });
      })
      .catch((err) => reject(err));
  });
};

let deleteUser = (input) => {
  let userId = mongoose.Types.ObjectId(input.userId);
  return new Promise((resolve, reject) => {
    repository.userRespository
      .deleteUser({ _id: userId })
      .then((result) => {
        resolve({ statusCode: 200, message: "User Deleted" });
      })
      .catch((err) => reject(err));
  });
};

let manageUserSession = (req, type, userName, userId) => {
  let finalReturn = "";
  switch (type) {
    case "createSesion":
      finalReturn = createTheSesson(req, userName, userId);
      break;

    case "destroySession":
      finalReturn = destroySession(req);
      break;
    default:
      break;
  }

  return finalReturn;
};

let destroySession = (req) => {
  req.session.destroy();
  return { error: "", sessionSet: false };
};

let createTheSesson = (req, userName, userId) => {
  let sessionSet = false;
  let error = "";
  try {
    req.session.username = userName;
    req.session.userId = userId;
    sessionSet = true;
    console.log(req.session);
  } catch (err) {
    error = err;
    sessionSet = false;
  } finally {
    return { error, sessionSet };
  }
};

module.exports = {
  signInUser,
  signOutUser,
  createUser,
  deleteUser,
};

const { resolve } = require("path");

const model = { users: require("../models/loginActivity") };

class Users {
  loginUser(username, password) {
    return new Promise((resolve, reject) => {
      model.users
        .find(
          {
            username: username,
            password: password,
          },
          {
            _id: 1,
            username: 1,
          }
        )
        .then((result) => {
          resolve(result);
        })
        .catch((err) => reject(err));
    });
  }

  createUser(input) {
    return new Promise((resolve, reject) => {
      let { email_id, username, password, first_name, last_name } = input;
      model.users.create(
        {
          username: username,
          first_name: first_name,
          last_name: last_name,
          email_id: email_id,
          password: password,
        },
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      );
    });
  }

  deleteUser(condition) {
    return new Promise((resolve, reject) => {
      model.users
        .remove(condition)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => reject(err));
    });
  }
}

module.exports = new Users();

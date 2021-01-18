const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@test.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Klaus Smith",
    email: "klaus@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "James Smith",
    email: "james@test.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;

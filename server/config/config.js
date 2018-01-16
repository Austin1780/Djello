require("dotenv").config();

module.exports = {
  development: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: "project_djello_development",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "AustinSmith",
    password: "databases",
    database: "project_djello_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "AustinSmith",
    password: "databases",
    database: "project_djello_production",
    host: "127.0.0.1",
    dialect: "postgres"
  }
};

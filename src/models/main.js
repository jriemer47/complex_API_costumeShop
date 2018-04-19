const database = require("../../db/costumes")
const uuid = require("uuid/v4")

getAll = limit => {
  console.log("models speaking")
  return database
}

module.exports = {
  getAll
}

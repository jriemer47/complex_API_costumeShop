const database = require("../../db/costumes")
const uuid = require("uuid/v4")

getTag = id => {
  console.log("hello from models")
  const costume = database.find(database => database.id === id)
  return costume.tag
}

module.exports = {
  getTag
}

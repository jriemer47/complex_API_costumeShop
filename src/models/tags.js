const database = require("../../db/costumes")
const uuid = require("uuid/v4")

getTag = id => {
  // console.log("hello from models")
  const costume = database.find(database => database.id === id)
  return costume.tag
}

deleteTag = id => {
  console.log("models bitch!")
  const tag = database.find(database => database.id === id)

  if (!tag) {
    result = {
      status: 404,
      message: `No tag with id of ${id}`
    }
    return result
  }
  database.forEach((tag, index) => {
    if (tag.id === id) {
      database.splice(index, 1)
    }
  })
  return database
}

module.exports = {
  getTag,
  deleteTag
}

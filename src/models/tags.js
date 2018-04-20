const database = require("../../db/costumes")
const uuid = require("uuid/v4")

getTag = id => {
  // console.log("hello from models")
  const costume = database.find(database => database.id === id)
  return costume.tag
}

deleteTag = (id, tagId) => {
  const selectedCostume = database.find(costume => costume.id === id)
  const tagToDelete = selectedCostume.tag.find(tag => tag.id === tagId)

  if (!tagToDelete) {
    result = {
      status: 404,
      message: `No tag with id of ${id}`
    }
    return result
  }
  database.forEach((costume, index1) => {
    costume.tag.forEach((tag, index2) => {
      if (tag.id === tagToDelete.id) {
        database[index1].tag.splice(index2, 1)
      }
    })
  })
  return database
}

createTag = (id, tagId, color, name) => {
  console.log("models working")
  let result
  if (!id || !tagId) {
    result = {
      status: 404,
      message: "Please enter in all information"
    }
    return result
  }
  let newTag = {
    id: uuid(),
    color,
    name
  }
  database.forEach((costume, index1) => {
    if (costume.id === id) {
      costume.tag.push(newTag)
    }
  })
  return newTag
}

module.exports = {
  getTag,
  deleteTag,
  createTag
}

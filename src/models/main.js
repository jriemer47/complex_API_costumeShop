const database = require("../../db/costumes")
const uuid = require("uuid/v4")

getAll = limit => {
  // console.log("models speaking")
  return database
}

getById = id => {
  // console.log("models speaking!!!")
  const costume = database.find(database => database.id === id)
  return costume
}

deleteCostume = id => {
  console.log("models speaking!!!")
  const costume = database.find(database => database.id === id)

  if (!costume) {
    result = {
      status: 404,
      message: `No costume with id of ${id}`
    }
    return result
  }

  database.forEach((costume, index) => {
    if (costume.id === id) {
      database.splice(index, 1)
    }
  })
  return database
}

module.exports = {
  getAll,
  getById,
  deleteCostume
}

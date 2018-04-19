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
  // console.log("models speaking!!!")
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

createCostume = (name, price, tags) => {
  console.log("model speaking!!!")
  let result
  if (!name || !price || !tags) {
    result = {
      status: 400,
      message: "Please add all content"
    }
    return result
  }
  let newCostume = {
    id: uuid(),
    name,
    price,
    tag: []
  }
  database.push(newCostume)
  return newCostume
}

module.exports = {
  getAll,
  getById,
  deleteCostume,
  createCostume
}

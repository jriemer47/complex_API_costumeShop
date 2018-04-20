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

updateCostume = (id, body) => {
  console.log("models speaking!!!!")
  const costume = database.find(costume => costume.id === id)

  let index = database.indexOf(costume)
  let error = []
  let { name, price, tag } = body

  let response
  if (!name || !price || !tag) {
    error.push("Please add updates")
    response = {
      error
    }
  } else {
    const updatedCostume = {
      id,
      name: body.name,
      price: body.price,
      tag: []
    }
    database[index] = updatedCostume
    response = updatedCostume
  }
  return response
}

module.exports = {
  getAll,
  getById,
  deleteCostume,
  createCostume,
  updateCostume
}

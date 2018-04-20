const model = require("../models/costume.js")

getAll = (req, res, next) => {
  // console.log("controller speaking")
  const limit = req.query.limit
  const costumes = model.getAll(limit)

  if (!costumes) {
    return next({
      status: 404,
      message: "Can't find costume"
    })
  }
  res.status(200).json({
    costumes
  })
}

getById = (req, res, next) => {
  // console.log("controller speaking!!!")
  const id = req.params.id
  const costumes = model.getById(id)

  if (!costumes) {
    return next({
      status: 404,
      message: `No costume with id of ${id}`
    })
  }
  res.status(200).json({
    costumes
  })
}

deleteCostume = (req, res, next) => {
  console.log("controller speaking!!!")
  const id = req.params.id
  const costumes = model.deleteCostume(id)

  if (costumes.error) next(costumes)
  else {
    res.status(200).json({
      costumes
    })
  }
}

createCostume = (req, res, next) => {
  // console.log("controller speaking!!!")
  let name = req.body.name
  let price = req.body.price
  let tag = req.body.tag
  const newCostume = model.createCostume(name, price, tag)

  if (newCostume.error) next(result)
  else
    res.status(200).json({
      newCostume
    })
}

updateCostume = (req, res, next) => {
  console.log("controller speaking!!!")
  const costume = model.updateCostume(req.params.id, req.body)

  if (!costume) {
    return next({
      status: 404,
      message: `Could not find costume with id of ${id}`
    })
  }
  res.status(200).json({
    costume
  })
}

module.exports = {
  getAll,
  getById,
  deleteCostume,
  createCostume,
  updateCostume
}

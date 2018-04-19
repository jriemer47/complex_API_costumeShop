const model = require("../models/main.js")

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

module.exports = {
  getAll,
  getById,
  deleteCostume
}

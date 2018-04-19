const model = require("../models/main.js")

getAll = (req, res, next) => {
  console.log("controller speaking")
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

module.exports = {
  getAll
}

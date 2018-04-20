const model = require("../models/tags")

getTag = (req, res, next) => {
  console.log("hello from controllers")
  const id = req.params.id
  const tags = model.getTag(id)

  if (!tags) {
    return next({
      status: 404,
      message: `Cannot find tag from costume id of ${id}`
    })
  }
  res.status(200).json({
    tags
  })
}

module.exports = {
  getTag
}

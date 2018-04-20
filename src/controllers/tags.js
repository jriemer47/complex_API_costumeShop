const model = require("../models/tags")

getTag = (req, res, next) => {
  // console.log("hello from controllers")
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

deleteTag = (req, res, next) => {
  console.log("controllers bitch!!")
  const id = req.params.id
  const tag = model.deleteTag(id)

  if (tag.error) next(tag)
  else {
    res.status(200).json({
      tag
    })
  }
}

module.exports = {
  getTag,
  deleteTag
}

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
  const id = req.params.id
  const tagId = req.params.tagId
  const tag = model.deleteTag(id, tagId)

  if (tag.error) next(tag)
  else {
    res.status(200).json({
      tag
    })
  }
}

createTag = (req, res, next) => {
  console.log("controllers working")
  const id = req.params.id
  const tagId = req.params.tagId
  const color = req.body.color
  const name = req.body.name
  const newTag = model.createTag(id, tagId, color, name)

  if (newTag.error) next(result)
  else {
    res.status(200).json({
      newTag
    })
  }
}

module.exports = {
  getTag,
  deleteTag,
  createTag
}

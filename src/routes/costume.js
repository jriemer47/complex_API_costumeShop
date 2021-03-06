const express = require("express")
const router = express.Router()
const costumeCtrl = require("../controllers/costume.js")
const tagCtrl = require("../controllers/tags.js")

router.get("/", costumeCtrl.getAll)

router.get("/:id", costumeCtrl.getById)
router.get("/:id/tag", tagCtrl.getTag)

router.delete("/:id", costumeCtrl.deleteCostume)
router.delete("/:id/tag/:tagId", tagCtrl.deleteTag)

router.post("/", costumeCtrl.createCostume)
router.post("/:id/tag/:tagId", tagCtrl.createTag)

router.put("/:id", costumeCtrl.updateCostume)
router.put("/:id/tag/:tagId", tagCtrl.updateTag)

module.exports = router

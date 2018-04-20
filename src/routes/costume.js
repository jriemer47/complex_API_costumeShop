const express = require("express")
const router = express.Router()
const costumeCtrl = require("../controllers/costume.js")
const tagCtrl = require("../controllers/tags.js")

router.get("/", costumeCtrl.getAll)

router.get("/:id", costumeCtrl.getById)
router.get("/:id/tag", tagCtrl.getTag)

router.delete("/:id", costumeCtrl.deleteCostume)
router.delete("/:id/tag", tagCtrl.deleteTag)
// working
router.post("/", costumeCtrl.createCostume)
// router.post("/", tagCtrl.createTag)

router.put("/:id", costumeCtrl.updateCostume)
// router.put("/:id", tagCtrl.updateTag)

module.exports = router

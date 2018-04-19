const express = require("express")
const router = express.Router()
const ctrl = require("../controllers/costume.js")

// working
router.get("/", ctrl.getAll)
// working
router.get("/:id", ctrl.getById)
// working
router.delete("/:id", ctrl.deleteCostume)

router.post("/", ctrl.createCostume)

module.exports = router

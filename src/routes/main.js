const express = require("express")
const router = express.Router()
const ctrl = require("../controllers/main.js")

// working
router.get("/", ctrl.getAll)
// working
router.get("/:id", ctrl.getById)

router.delete("/:id", ctrl.deleteCostume)

module.exports = router

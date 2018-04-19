const express = require("express")
const router = express.Router()
const ctrl = require("../controllers/main.js")

router.get("/", ctrl.getAll)

module.exports = router

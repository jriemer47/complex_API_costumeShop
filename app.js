const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyParser = require("body-parser")
const port = process.env.PORT || 3000
const cors = require("cors")
const uuid = require("uuid/v4")
const db = require("./db/costumes.json")

app.disable("x-powered-by")

if (process.env.NODE_ENV !== "test") app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cors())

const costumesRoutes = require("./src/routes/costume.js")
app.use("/costumes", costumesRoutes)

app.use((err, req, res, next) => {
  res.status(err.status).json(err)
})

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Way to go ${port}!`)
  })
}
module.exports = app

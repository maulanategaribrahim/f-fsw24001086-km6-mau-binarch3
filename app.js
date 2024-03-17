// membaca carsroutes
const carRouter = require("./routers/carsRoutes")

//Mengimpor modul express dan morgan untuk penggunaan dalam aplikasi
const express = require("express")
const morgan = require("morgan")

const app = express()

//middleware untuk membaca json dari req body ke kita
app.use(express.json())
app.use(morgan("dev"))

//  middleware ntuk membaca json dari req body ke kita
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  console.log("Time:", req.requestTime)
  next()
})

app.use("/", carRouter)
app.use("/cars", carRouter)

//Mengeskpor instance Express (app) agar dapat digunakan di file lain.
module.exports = app

const express = require("express")
const carsController = require("../controllers/carsController")
const router = express.Router()

// Middleware parameter untuk mengecek id mobi
router.param("id", carsController.checkId)

// Mengatur rute untuk root path ("/")
router
  .route("/")
  .get(carsController.ping) //permintaan ping dipostman dari data carrcontroller
  .post(
    //carsController.checkBody,
    carsController.addCar
  )

  // Mengatur rute untuk path "/cars" dan permintaan daftar mobil
router
  .route("/cars")
  .get(carsController.getListCars)

// Mengatur rute untuk path "/:id" dengan permintaan by id hapus id 
router
  .route("/:id")
  .get(carsController.getCarById)
  .patch(carsController.editCar)
  .delete(carsController.removeCar)

// Mengekspor router agar dapat digunakan di file lain
module.exports = router

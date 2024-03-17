// Mengimpor aplikasi Express dari file "./app"
const app = require("./app")

// Menetapkan nomor port yang akan digunakan dan dijalankan oleh server
const port = process.env.port || 8000

app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})

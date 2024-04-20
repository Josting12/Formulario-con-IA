require("dotenv").config()
const express = require("express")
const app = express()
const rutaUsuario = require("./routes/Usuario_routes")
const rutaChatgpt = require("./routes/Chatgpt_routes")

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use("/user",rutaUsuario)
app.use("/chatgpt",rutaChatgpt)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
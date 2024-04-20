const mongoose = require("mongoose")

const UsuarioSchema = mongoose.Schema({
    user: String,
    salt:String,
    password: String,
    name: String,
    date_create: Date

    })
    
const UsuarioModel = mongoose.model('user', UsuarioSchema)

module.exports = UsuarioModel
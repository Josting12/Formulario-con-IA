const express = require('express');
const usuario = require('../models/usuario_models')
const router = express.Router()
const funciones =require("../funciones/cifrar")
const validateUser = require("../middleware/validateUser")
const validateLogin = require("../middleware/validateLogin")
const validateToken = require("../middleware/validateToken")
const MongoConnect = require("../MongoConnect")
const jwt = require('jsonwebtoken')
MongoConnect()

//Ingresar un usuario nuevo 
router.post('/',validateUser,  async (req, res) => {
    try{
        const salt2= funciones.salt()
        const {user, password, name} = req.body
        const Usuario = new usuario({
            user,
            salt: salt2 ,
            password:funciones.cifrar(password,salt2),
            name,
            date_create : Date()
        })
        await Usuario.save()
        return res.json(Usuario)
    }catch(error){
      console.log(error)
        return res.status(500).json({status:"Error de servidor"})
    }
})

//Hacer el login
router.post('/login' ,validateLogin,async (req, res) => {
    try{
        const {user, password} = req.body
        const usuarios = await usuario.findOne({user: user})
        
        if (!usuarios)
          return res.status("404").json({status:"Usuario no encontrado"})
        
        if(usuarios.length == 0)
          return res.status(404).json({status: "llave no encontrado"})
        
        jwt.sign({user_id: usuarios.id}, process.env.LOCALKEY, (error, token)=> {
            if(error)
                return res.status(501).json({status: "error inesperado"})
            const passx = funciones.cifrar(password,usuarios.salt)
            if(passx === usuarios.password){
              return res.status(200).json({status:"Login sucessfull", token: token, user_id:usuarios.id})}
            else{
              return res.status(500).json({status:"Login Failed"})
            } 
        })
    }catch(error){
      console.log(error)
        return res.status(500).json({status:"Error de servidor"})
    }
})

//hacer un update
router.put('/:id',validateUser, validateToken, async (req, res) => {
    try{
        const {id} = req.params
        const {user, salt, password, name} = req.body
        const usuarios_update = await usuario.findByIdAndUpdate(id, {user,salt, password: functions.cifrar(password,salt), name}, {new: true})
        if (!usuarios_update)
            return res.status("500").json({status:"Usuario no encontrado"})
        
        return res.json(usuarios_update)
    }catch(error){
        return res.status(500).json({status:"Error de servidor"})
    }
  
})

module.exports = router
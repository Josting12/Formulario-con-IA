const jwt = require ("jsonwebtoken")

const validaToken = (req,res,next)=>{
    const token = req.headers["authorization"].split(" ")[1]
    console.log("validando llegada de token desde el middleware",token)
    jwt.verify(token, process.env.LOCALKEY, (error, data)=>{
    if (error)
        return res.status(404).json({status: "token invalido"})
    req.usuario = data
    next()
    })    
}

module.exports = validaToken
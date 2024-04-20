const mongoose= require("mongoose")

const MongoConnect=()=>{
    mongoose.connect(process.env.DB)
    .then(()=>{console.log("conexion de BD Existosa")})
    .catch((error)=>{console.log("error:"+error)})
}
module.exports=MongoConnect
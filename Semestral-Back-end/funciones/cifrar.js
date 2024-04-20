const bc = require ("bcryptjs")

function salt (){
    const salt2= bc.genSaltSync(10)
    return salt2
}

function cifrar (password,salt2){    
    try{
       hash_password=bc.hashSync(password,salt2)
    }
    catch(e){
        console.log(error)
    }
    return hash_password;
}

module.exports ={cifrar,salt}
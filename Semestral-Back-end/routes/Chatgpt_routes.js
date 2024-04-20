const express = require('express');
const axios = require('axios');
const router = express.Router()
const MongoConnect = require("../MongoConnect")
const validateToken = require("../middleware/validateToken")
const validatePrompt = require('../middleware/validatePrompt')
const ChatgptModel = require('../models/chatgpt_models');

MongoConnect()

router.get('/user/:id_user', async (req, res) => {
    try{   
        
        var {id_user} = req.params;
        
        const GPT = await ChatgptModel.find({id_user})
        if(!GPT)
            return res.status(404).send('User prompt  not found')
        return res.status(200).json(GPT)
         
     }catch(err){
         console.log(err);
         return  res.status(500).send('Ups there was an error');
     }
})


//Consulta a la API Chatgpt y devuelve la respuesta
router.post('/', validatePrompt,  validateToken, async (req, res) => {
    try{
        const {message,message2} =  req.body; // Obtener el mensaje enviado por el cliente en el cuerpo de la solicitud
        const apiUrl = process.env.APIURL // URL de la API de OpenAI
        const apiKey = process.env.APIKEY // Clave de API de OpenAI (reemplazar por la propia)  
        // Configurar los parámetros de la solicitud a la API de OpenAI en formato JSON
        axios.post(apiUrl, {
            "model": "gpt-3.5-turbo", // Nombre del modelo pre-entrenado a utilizar
            "messages": [{ role: "system", "content": "Brindame recomendaciones de colores segun "+message},
                        {role: "system", "content": "Dame colores adecuados al siguiente escenario "+message2}
                       // Mensajes adicionales para el modelo de lenguaje
            ],
            "temperature": 0.7, // Controla la aleatoriedad de la respuesta generada por el modelo de lenguaje
            "max_tokens": 3000, // Controla el tamaño máximo de la respuesta generada por el modelo de lenguaje
            "top_p": 1, // Controla la generación de texto basada en la probabilidad de cada palabra
            "frequency_penalty": 0, // Controla la repetición de palabras en la respuesta generada por el modelo de lenguaje
            "presence_penalty": 0, // Controla la inclusión de palabras específicas en la respuesta generada por el modelo de lenguaje
        }, {
            headers: {
                'Content-Type': 'application/json', // Especifica que se está enviando JSON en el cuerpo de la solicitud
                'Authorization': `Bearer ${apiKey}` // Se envía la clave de API como un token de autorización en la cabecera de la solicitud
            }
        })
            .then(async(response) => {
                // Extraer la respuesta generada por el modelo de lenguaje a partir de la propiedad 'choices' de la respuesta de la API
                const completion = response.data.choices[0].message.content;
                const id_user = req.usuario.user_id; //Obtener el id del usuario que esta en el token de autorizacion
                try{
                    const chatgpt = new ChatgptModel({
                        message: message,
                        response: completion,
                        id_user: id_user,
                        data_create: Date()
                    })  
                    await chatgpt.save()
                   
                }catch (error) {
                    console.log(error)
                    return res.status(500).json({status:"Error de guardado en la base de datos"})
                }
                res.send(completion); // Enviar la respuesta generada por el modelo de lenguaje al cliente
            })
            .catch(error => {
                console.log(error); // Manejar cualquier error que ocurra durante la solicitud a la API de OpenAI
                res.status(500).send('Ha ocurrido un error en la solicitud a la API de ChatGPT'); // Enviar una respuesta de error al cliente
            });
     
    }catch (error) {
        console.log(error)
        return res.status(500).json({status:"Error de servidor"})
    }
})

module.exports = router
const mongoose = require("mongoose")
const { Schema } = mongoose;

const ChatgptSchema = mongoose.Schema({
    message: String,
    response: String,
    id_user: {
        type: Schema.Types.ObjectId,
        ref: 'usuario'
    },
    date_create: Date
    })
    
const ChatgptModel = mongoose.model('chatgpt', ChatgptSchema)

module.exports = ChatgptModel
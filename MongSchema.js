const mongoose = require("mongoose")
const url = "mongodb+srv://user:user@nex-chatgpt.dzatrnh.mongodb.net/?retryWrites=true&w=majority";
const Schema = mongoose.Schema

const ChatGPT = new Schema({
    name: {
        type: String
    },
    mobile: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
})

const ChatGPTModel = mongoose.model("Register", ChatGPT)

module.exports.ChatGPTModel=ChatGPTModel;
module.exports.url=url;



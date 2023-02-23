const mongoose = require("mongoose")
const { ChatGPTModel } = require("./MongSchema")
const { url } = require("./MongSchema")
const jwt = require("jsonwebtoken")
const SECRET_key = "qwertyuiopasdfghjkfghj"


const login = (async (req, res) => {
    try {
        await mongoose.connect(url)
        const email = await ChatGPTModel.find({ email: req.body.email })
        const pass = await ChatGPTModel.find({ password: req.body.password })

        if (email.length !== 0 && pass.length !== 0) {

            const token = jwt.sign(req.body, SECRET_key)

            return (res.send({
                message: "Welcome" + " " + email[0].name,
                token: token,
                name: email[0].name,
                email: email[0].email,
                password: email[0].password
            }))
        }
        
        res.send("Wrong Credentials")
    }
    catch (error) {
        console.log(error);
    }
});

module.exports = login
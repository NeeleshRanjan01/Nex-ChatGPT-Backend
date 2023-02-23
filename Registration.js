const mongoose = require("mongoose")
const {ChatGPTModel}=require("./MongSchema")
const {url}=require("./MongSchema")


const registration= (async (req, res) => {
    console.log(req.body)
    try {
        await mongoose.connect(url)    
        const checkData = await ChatGPTModel.find({ email: req.body.email })
        if (checkData.length !== 0) {
            return res.send("User Already Registered")
        }
        
        const insertData = new ChatGPTModel(req.body);
        await insertData.save()
        res.send("User Register Successfully")
    }
    catch (error) {
        console.log(error);
    }
});

module.exports = registration;


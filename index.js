const bodyParser = require('body-parser');
const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());

const {OTP}=require("./OTP")
const registration =require("./Registration")
const login =require("./Login")


app.post("/reg", registration)
app.post("/OTP", OTP)
app.post("/login", login)
app.get("/", (req,res)=>{
    res.send("Working")
})

app.listen(process.env.PORT || 4000)
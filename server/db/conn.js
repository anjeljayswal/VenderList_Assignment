const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    // useCreateIndex: true


}).then(()=>console.log("database connected")).catch((err)=>console.log("errr",err))
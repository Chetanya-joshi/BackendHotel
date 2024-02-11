const mongoose = require('mongoose')
require("dotenv").config({ path: "./.env" });
const db=process.env.MONGO_URL;
module.exports= mongoose.connect(db)
.then(()=>{
    console.log("yes connected suessfully")
}).catch((err)=>{
    console.log("something happens wrong so no connection")
})
    

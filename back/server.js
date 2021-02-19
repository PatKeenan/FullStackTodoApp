const express = require("express")
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require("mongoose")

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000


app.use(bodyparser.json())

//routes 
const mainRouter = require('./routes/main')
app.use('/', mainRouter)



//mongoDb Setup
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=> {
    if(err){
        console.log(err)
    }else{
        console.log('Connected to Database')
    }
});




app.listen(PORT, () =>{
    console.log(`App started on Port: ${PORT}` )
})

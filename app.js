const express = require('express');
const router_data = require('./routes/routes')
const dbConnect = require('./db/connection')
const bodyParser = require('body-parser');

const tempData = require('./controller/db_operation')


const app = express();

const PORT = 5000;

// app.unsubscribe()
dbConnect()
app.use(bodyParser.json());


// Interecptor for request body 
app.use((req, res, next)=> {
    console.log(req.body)
    console.log(res.rawHeaders)
    next()
})

// common router
app.use(router_data)


// Interceptor for repsonse body
app.use((req,res,next)=> {
    console.log("Enter")
    console.log(res.status().body)
    next()

})
const start = async () => {
    try {
        app.listen(PORT, () => {
           console.log( `${PORT} connected` )
        })
        // await dbConnect()
    } catch (error) {
        console.log("Error")    
    }
}

start()
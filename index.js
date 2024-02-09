import express from "express";

//create an express app
const app = express()
const port = +process.env.PORT || 4000
//create express router
// patch is faster that put
app.get('/', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: "you are home"
    })
})

app.listen(port)

app.all('*', (req,res)=>{
    res.json({
        status: 404,
        msg: '404 page'
    })
})
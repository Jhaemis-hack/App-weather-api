require('dotenv').config();
const express = require('express')
const axios = require('axios')
const morgan = require('morgan')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 4000;
const reqIp = require('request-ip')

//middlewares config
app.use(morgan('tiny'))
app.use(cors())
app.use(reqIp.mw())

app.get('/', (req, res)=>{
    const ip = req.clientIp;
    res.send(ip)
})

app.listen(port, (err) =>{
    if(err) console.log(err)
    console.log(`app is listening @ http://localhost:${port}`)
})
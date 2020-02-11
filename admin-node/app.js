const express = require("express")
const router = require('./router')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

// //中间件
// function mylogger(req, res, next) {
//     console.log("log")
//     next()
// }
// app.use(mylogger)
// app.get('/', function (req, res) {
//     throw new Error("error...")
//     res.send('hello node')
// })

// function errorHandler(err, req, res, next) {
//     console.log(err)
//     res.status(500).json({
//         error: -1,
//         msg: "error:"+err
//     })
// }

app.use(cors())
// app.use(errorHandler)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/',router)
const server = app.listen(5000, function () {
    const { address, port } = server.address()
    console.log("running http://%s:%s", address, port)
})
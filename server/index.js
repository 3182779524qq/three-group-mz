const userApi = require('./api/userApi')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 后端api路由
app.use('/api/user', userApi)

// 监听端口
app.listen(3000)
console.log('success listen at port:3000')

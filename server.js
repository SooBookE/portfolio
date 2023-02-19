const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000
const _path = path.join(__dirname, '/origin')

app.use(express.static(_path))
app.listen(PORT, ()=>console.log('Portfolio server begin to run code.'))
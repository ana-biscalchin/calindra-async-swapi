const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router()
const searchControllers = require("./src/controllers/searchControllers")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', router)

router.get('/', function (req, res) {
    res.json({ message: 'Get method!' })
})

let port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

searchControllers(1)
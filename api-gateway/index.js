let express = require('express')
let cors = require('cors')
let proxy = require('express-http-proxy')
let app = express()
let bodyparser = require('body-parser')



app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}))
app.use(bodyparser.urlencoded({ extended: true }))

app.use('/customers', proxy('http://localhost:5002'))
app.use('/carts', proxy('http://localhost:5001'))
app.use('/orders', proxy('http://localhost:5003'))

app.get('/', (req, res) => {
    res.send({ msg: "msg from gateway" })
})



app.listen(4000, (req, res) => {
    console.log('Server is running on port 4000')
})


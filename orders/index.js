let express = require('express')
let cors = require('cors')
let app = express()
let bodyparser = require('body-parser')


app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}))
app.use(bodyparser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send({ msg: "msg from Orders Service" })
})

app.listen(5003, (req, res) => {
    console.log('Server is running on port 5003')
})
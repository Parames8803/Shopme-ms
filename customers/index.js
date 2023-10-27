let express = require('express')
let cors = require('cors')
let app = express()
let bodyparser = require('body-parser')
app.use(express.json())
let userLogin = require('../customers/routes/userLogin')
let userSignup = require('../customers/routes/userSignup')

app.use('/login', userLogin)
app.use('/signup', userSignup)

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}))

app.use(bodyparser.urlencoded({ extended: true }))



app.listen(5002, (req, res) => {
    console.log('Server is running on port 5002');
})
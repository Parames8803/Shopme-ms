const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send({msg : "msg from login"})
})

router.get('/error', (req, res) => {
    res.send({msg : "msg from login , it is error"})
})




module.exports = router;
const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send({msg : "msg from Signup"})
})


module.exports = router;
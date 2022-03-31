const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send('Stories route')
})

module.exports = router;
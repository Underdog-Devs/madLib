const express = require('express');
const router = express.Router();

const Unapproved = require('../../models/Unapproved');

// @route    GET api/unapproved/me
// @desc     Get current users unapproved
// @access   Private
router.get('/', async (req, res) => {
    try {
        const unapproved = await Unapproved.findOne({
            user: req.body.user
        })
        console.log(req.body.user)
        if (!unapproved) {
            return res.status(400).json({ msg: 'There is no unapproved for this user' });
        }

        res.json(unapproved);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route POST /api/user
// @desc Register user
// @access Public
router.post("/",
    check("username", "Username is required").notEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Enter a password with 6 or more characters").isLength({ min: 6 }),
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { username, email, password } = req.body;

        try {
            let user = await User.findOne({ email });

            // Check if user exists
            if (user) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
            }

            user = new User({
                username,
                email,
                password
            })

            // Encrypt Password
            const salt = await bcrypt.genSalt(10)

            user.password = await bcrypt.hash(password, salt)

            // Returns promise
            await user.save()

            res.status(200).send(user)
            // const payload = {
            //     user: {
            //         id: user.id
            //     }
            // }

            // jwt.sign
        } catch (err) {
            console.error(err.message)
            res.status(500).send('Server Error')
        }

    })

module.exports = router;
const Everything = require('../models/everything');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getUser = async (req, res) => {
    try{
        let email = req.body.email;
        let u =  await Everything.getUser(email);
        console.log(u);
        res.send({
            'user':u
        });
    }catch(err) {
        console.error(err);
        res.send({'msg':err});
    }
}

exports.createUser =  async (req, res) => {

    console.log(req.body);
    var { username, email, password } = req.body;

    try {
        let user = await Everything.getUser(email);

        // Check if user exists
        if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
        }
        const salt = await bcrypt.genSalt(10)

        password = await bcrypt.hash(password, salt)

        // Returns promise
        

        user = await Everything.createUser({
            username,
            email,
            password
        });
        await user.save()

        // Encrypt Password


        res.status(200).send(user);
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }

}
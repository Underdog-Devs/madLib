const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
var UserController = require('../../controllers/users.controller');


// @route POST /api/user
// @desc Register user
// @access Public
router.post("/",UserController.createUser);
router.get("/",UserController.getUser);

module.exports = router;
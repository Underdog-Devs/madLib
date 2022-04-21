const mysql = require('mysql');
const config = require('./env.config')
const util = require('util')

const options = {
    host: config.database.host,
    user: config.database.user,
    password: config.database.password
}

const pool = mysql.createPool(options)
pool.query = util.promisify(pool.query)

module.exports = pool
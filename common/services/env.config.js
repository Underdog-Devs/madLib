module.exports = {
    database: {
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASS,
        connect_limit: process.env.DBLIMIT
    },
}
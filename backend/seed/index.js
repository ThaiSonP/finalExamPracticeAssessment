// shortcut for pg-promise

const pgp = require ('pg-promise')({});
const db = pgp('postgres://localhost/films')

module.exports = db

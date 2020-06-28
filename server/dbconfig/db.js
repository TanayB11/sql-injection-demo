const mysql = require('mysql2')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
	'sql_injection_demo', 'root', process.env.MYSQL_CREDS, {
	dialect: 'mysql',
	host: 'localhost'
})

module.exports = sequelize
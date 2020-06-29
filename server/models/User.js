const { DataTypes } = require('sequelize')
const db = require('../dbconfig/db')

const User = db.define('User', {
	username: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	tableName: 'users'
})

module.exports = User
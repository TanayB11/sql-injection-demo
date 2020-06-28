const { DataTypes } = require('sequelize')
const sequelize = require('../dbconfig/db')

const User = sequelize.define('User', {
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
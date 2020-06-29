const { DataTypes } = require('sequelize')
const db = require('../dbconfig/db')

const Product = db.define('Product', {
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	price: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	tableName: 'products'
})

module.exports = Product
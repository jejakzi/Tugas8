const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Restaurant = sequelize.define('restaurants', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: { type: DataTypes.STRING, allowNull: false },
        slot: { type: DataTypes.INTEGER, allowNull: true }
    });
    return Restaurant;
};
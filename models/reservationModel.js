const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Reservation = sequelize.define('reservations', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        restaurant_id: { type: DataTypes.INTEGER, allowNull: false },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        date: { type: DataTypes.DATE, allowNull: false }
    });
    return Reservation;
};
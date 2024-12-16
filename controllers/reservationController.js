const { sequelize, User, Reservation, Restaurant } = require("../models");

exports.readAllReservation = async (req, res) => {
    try {
        const reservationQuery = `
            SELECT r.id, rt.name AS restaurant_name, u.username, r.date
            FROM reservations r
            JOIN restaurants rt ON rt.id = r.restaurant_id
            JOIN users u ON u.id = r.user_id
            ORDER BY r.date ASC
        `;

        const reservations = await sequelize.query(reservationQuery, {
            type: sequelize.QueryTypes.SELECT,
        });
        const response = reservations.map(reservation => ({
            id: reservation.id,
            restaurant_name: reservation.restaurant_name,
            guest_name: reservation.username,
            date: new Date(reservation.date).toISOString().split('T')[0],
        }));

        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createReservation = async (req, res) => {
    try {
        const { restaurant_id, user_id, date } = req.body;
        const countReservationQuery = `
            select count(1) as count
            from reservations r
            join restaurants rt ON rt.id = r.restaurant_id
            where rt.id = :restaurantId and r.date = :date
        `;
        const countReservation = await sequelize.query(countReservationQuery, {
            replacements: { restaurantId : restaurant_id, date },
            type: sequelize.QueryTypes.SELECT,

        });

        const getSlotQuery = `
            select slot from restaurants where id = :restaurantId
        `;
        const getSlot = await sequelize.query(getSlotQuery, {
            replacements: { restaurantId : restaurant_id},
            type: sequelize.QueryTypes.SELECT,
        });
        if(getSlot[0].slot<=countReservation[0].count){
            return res.status(404).json({ error: 'Slot is full' });
        }
        
        await Reservation.create({
            user_id,
            restaurant_id,
            date
        });

        res.status(201).json({ message: 'Reservation created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteReservation = async (req, res) => {
    const { id } = req.params; 
    try {
        const reservation = await Reservation.findByPk(id);

        if (!reservation) {
            return res.status(404).json({ error: 'Reservation not found' });
        }
        await reservation.destroy();

        res.status(200).json({ message: 'Reservation deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

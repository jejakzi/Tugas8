const { sequelize, Restaurant } = require("../models");

exports.readAllRestaurant = async (req, res) => {
    try {
        const restaurantQuery = `
            SELECT id, name, slot
            FROM restaurants
        `;

        const restaurants = await sequelize.query(restaurantQuery, {
            type: sequelize.QueryTypes.SELECT,
        });
        const response = restaurants.map(restaurant => ({
            id: restaurant.id,
            name: restaurant.name,
            slot: restaurant.slot
        }));

        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createRestaurant = async (req, res) => {
    try {
        const { name, slot } = req.body;
        
        await Restaurant.create({
            name,
            slot
        });

        res.status(201).json({ message: 'Restaurant created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateRestaurant = async (req, res) => {
    const { id } = req.params; 
    const { name, slot} = req.body;

    try {
        const restaurant = await Restaurant.findByPk(id);

        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }

        restaurant.name = name || restaurant.name;
        restaurant.slot = slot || restaurant.slot;

        await restaurant.save();

        res.status(200).json({ message: 'Restaurant updated successfully'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteRestaurant = async (req, res) => {
    const { id } = req.params; 
    try {
        const restaurant = await Restaurant.findByPk(id);

        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        await restaurant.destroy();

        res.status(200).json({ message: 'Restaurant deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

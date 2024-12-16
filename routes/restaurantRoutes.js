const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
const verifyToken = require('../middleware/authMiddleware');

router.get('', restaurantController.readAllRestaurant);
router.post('/', verifyToken, restaurantController.createRestaurant);
router.put('/:id', verifyToken, restaurantController.updateRestaurant);
router.delete('/:id', verifyToken, restaurantController.deleteRestaurant);

module.exports = router;

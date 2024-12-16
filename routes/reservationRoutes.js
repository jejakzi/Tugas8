const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
const verifyToken = require('../middleware/authMiddleware');

router.get('', reservationController.readAllReservation);
router.post('/', verifyToken, reservationController.createReservation);
router.delete('/:id', verifyToken, reservationController.deleteReservation);

module.exports = router;
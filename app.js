const express = require('express');
const { sequelize } = require('./models');
const restaurantRoutes = require('./routes/restaurantRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 9002;

app.use(express.json());
app.use('/restaurant', restaurantRoutes);
app.use('/reservation', reservationRoutes);
app.use('/auth', authRoutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});

const { sequelize, User, Product } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registration = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            username,
            password: hashedPassword
        });

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
};
   
exports.login = async (req, res) => {
    try {
    const { username, password } = req.body;
    const [user] = await sequelize.query(
        `SELECT id, username, password FROM users WHERE username = :username`,
        { replacements: { username }, type: sequelize.QueryTypes.SELECT }
    );

    if (!user) {
        return res.status(401).json({ error: 'Authentication failed' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        return res.status(401).json({ error: 'Authentication failed' });
    }

    const token = jwt.sign({ userId: user.id }, 'your-secret-key', {
        expiresIn: '1h',
    });
    res.status(200).json({ token });
    } catch (error) {
    res.status(500).json({ error: 'Login failed' });
    }
};
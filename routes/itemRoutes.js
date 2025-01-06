const express = require('express');
const pool = require('../db');
const router = express.Router();

// Get all items
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM items');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Database error' });
    }
});

// Create a new item
router.post('/', async (req, res) => {
    const { name, description, price } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO items (name, description, price) VALUES ($1, $2, $3) RETURNING *',
            [name, description, price]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Database error' });
    }
});

module.exports = router;
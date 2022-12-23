// Requires and Router
const express = require('express');
const router = express.Router();
const path = require('path');

// Get Routes for public folder html files
router.get("notes", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router
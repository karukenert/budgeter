const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	res.json({ status: 'OK' });
});
router.get('/ping', async (req, res) => {
	res.json({ status: 'OK' });
});

module.exports = router;

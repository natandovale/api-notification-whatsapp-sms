const express = require('express');
const notificationController = require('../controllers/notification-controller');
const router = express.Router();

router.post('/', notificationController.send);

module.exports = router;
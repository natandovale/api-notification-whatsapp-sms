const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authMiddleware = require('./services/auth-service');
const app = express();

app.use(cors());

const notificationRoutes = require('./routes/send-notifications');
const indexRoutes = require('./routes/index-route');

app.use(express.json());
app.use(authMiddleware);
app.use('/', indexRoutes);
app.use('/send-notification', notificationRoutes);

module.exports = app;
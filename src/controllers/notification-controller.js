const sendWhatsappService = require('../services/notification-group-whatsapp');
const sendSms = require('../services/notification-sms');

const send = async (req, res) => {
    const {message} = req.body;
    await sendWhatsappService.sendNotification(message);
    await sendSms.sendSms(message);
    return res.status(201).json("success!");
};

module.exports = {
    send
};
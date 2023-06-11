const secret =  require("../services/get-secret");
var request = require("request");

const sendNotification = async (notification) => {

  const instanceMsg = await secret.get("InstanceMsg").then(c => {
    return c;
  });

  const tokenMsg = await secret.get("TokenMsg").then(c => {
    return c;
  });

var options = {
  method: 'POST',
  url: `https://api.ultramsg.com/${instanceMsg}/messages/chat`,
  headers: {'content-type': ' application/x-www-form-urlencoded'},
  form: {
    "token": tokenMsg,
    "to": "558596388243-1578355129@g.us",
    "body": notification,
    "priority": 10,
    "referenceId": "",
    "msgId": "",
    "mentions": ""
}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
}

module.exports = {
  sendNotification
};
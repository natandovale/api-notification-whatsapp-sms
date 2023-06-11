const secret =  require("../services/get-secret");
const twilio = require('twilio');

const sendSms = async (message) => {
    const toNumberTwilio = await secret.get("ToNumberTwilio").then(number => {
        return number;
      });

      const authToken = await secret.get("AuthToken").then(token => {
        return token;
      });
      
      const accountSid = await secret.get("AcountSid").then(accountId => {
        return accountId;
      });

      const client = twilio(accountSid, authToken);

      client.messages
         .create({
         body: message,
         from: '+13613493155',
         to: `+${toNumberTwilio}`
     })
    .then(message => console.log(message.sid))
    .catch(error => console.log(error));
}

module.exports = {
    sendSms
  };


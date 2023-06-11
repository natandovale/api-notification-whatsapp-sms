const client = require("../config/key-config");

const get = async (secretName) => {
    const secret = await client.getSecret(secretName).then(c => {
        const res = c.toString();
        return res;
    });

    return secret;
}

module.exports = {
    get
}

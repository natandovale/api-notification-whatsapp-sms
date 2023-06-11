const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');

const clientConfig = {
    region: 'us-east-2',
    credentials: {
      accessKeyId: 'AKIA3K53E44ARFVGFC7M',
      secretAccessKey: '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',
    },
  };

const secretsManager = new SecretsManagerClient(clientConfig);

const getSecret = async (secretName) => {
    try {
        const command = new GetSecretValueCommand({
          SecretId: secretName,
        });
    
        const response = await secretsManager.send(command);
        console.log(response);
        if ('SecretString' in response) {
            const secretValue = JSON.parse(response.SecretString);
            const keys = Object.keys(secretValue);

            if (keys.length === 1) {
                 const secretKey = keys[0];
                 const secretData = secretValue[secretKey];
                 
                 const res = secretData.toString();
                 return res;
      } 
        }
     }catch (error) {
        console.error('Erro ao obter o valor do segredo:', error);
  }
}

module.exports = {
    getSecret
}

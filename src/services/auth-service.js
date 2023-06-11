const secret =  require("../services/get-secret");

async function authMiddleware(req, res, next) {
   const resp = await secret.get("ApiKey").then(c => {
    return c;
});

  const providedKey = req.headers['x-api-key']; 
  
    if (!providedKey || providedKey !== resp) {
      return res.status(401).json({ message: 'Acesso não autorizado.' });
    }
  next();
}

module.exports = authMiddleware;
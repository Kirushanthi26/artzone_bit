const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  const token = req.headers.authorization.split(' ')[1];;

  if (!token) {
    return res.status(401).json({ message: 'No token provided.' });
  }

  jwt.verify(token, 'artzone_secret_key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token.' });
    } else {
      req.userData = {userId: decoded.userId};
      next(); 
    }
  });
};



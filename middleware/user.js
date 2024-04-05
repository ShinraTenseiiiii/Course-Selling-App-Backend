// Middleware for handling auth
const jwt = require('jsonwebtoken');
const {Jwt_Secret} = require('../config');
function userMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(' ');
    const jwtToken = words[1];
    const decodedJwt = jwt.verify(jwtToken, Jwt_Secret)
    if(decodedJwt.username){ // jwt has the username encoded
        next();
    }
    else{
        res.status(403).json({
            msg : "Not authenticated"
        })
    }
}

module.exports = userMiddleware;
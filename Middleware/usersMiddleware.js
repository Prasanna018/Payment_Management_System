
const jwt = require("jsonwebtoken")
// const { users } = require('../Db')
const jwt_secrete = "12345ptg";


function userMiddleware(req, res, next) {
    const headers = req.headers.authorization;

    if (!headers) {
        res.status(403).json({
            msg: "header not found"

        })
    }

    const token = headers;
    try {
        jwt.verify(token, jwt_secrete);
        next();

    } catch (error) {

        res.status(403).json({})
    }
}
module.exports = userMiddleware;
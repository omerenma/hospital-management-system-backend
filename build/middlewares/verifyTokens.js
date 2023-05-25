"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();
const verifyToken = (req, res, next) => {
    try {
        // Get token from headers
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!authHeader) {
            return res.status(401).json({ message: 'You are not authorized' });
        }
        const verify = jwt.verify(authHeader, process.env.TOKEN_SECRET);
        return req.info = verify;
    }
    catch (error) {
        return res.status(500).json({ error: 'something went wrong' });
    }
    next();
};
exports.verifyToken = verifyToken;

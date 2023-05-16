"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const verifyToken = (req, res, next) => {
    try {
        // Get token from headers
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!authHeader) {
            return res.status(401).json({ message: 'You are not authorized' });
        }
        const verify = jsonwebtoken_1.default.verify(authHeader, process.env.TOKEN_SECRET);
        req.info = verify;
    }
    catch (error) {
        return res.status(500).json({ error: 'something went wrong' });
    }
    next();
};
exports.verifyToken = verifyToken;

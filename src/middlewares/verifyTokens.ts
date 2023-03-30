import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import {Request, Response, NextFunction} from 'express'
import { Data } from '../interface/Data'

dotenv.config()

interface Extended extends Request {
    info?: Data
}

export const verifyToken = (req: Extended, res: Response, next: NextFunction) => {
    try {
        // Get token from headers
        const token = req.headers['token'] as string;
        if(!token){
            return res.status(401).json({message: 'You are not authenticated'})
        }
        const verify = jwt.verify(token, process.env.TOKEN_SECRET as string) as Data
       req.info = verify

    } catch (error) {
        return res.status(500).json({error: 'something went wrong'})
    }
    next()
}
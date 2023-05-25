const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
import {Request, Response, NextFunction} from 'express'
import { Data } from '../interface/Data'

dotenv.config()

interface Extended extends Request {
    info?: Data
}

export const verifyToken = (req: Extended, res: Response, next: NextFunction) => {
    try {
        // Get token from headers
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if(!authHeader){
            return res.status(401).json({message: 'You are not authorized'})
        }
        const verify = jwt.verify(authHeader, process.env.TOKEN_SECRET as string) as Data
       return req.info = verify
     

    } catch (error) {
        return res.status(500).json({error: 'something went wrong'})
    }
    next()
}
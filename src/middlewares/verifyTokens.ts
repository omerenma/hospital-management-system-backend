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
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if(!token){
            return res.status(401).json({message: 'You are not authorized'})
        }
        const verify = jwt.verify(token, process.env.TOKEN_SECRET as string) as Data
        console.log(verify)
       
       req.info = verify

    } catch (error) {
        console.log('ERROR: ', error )
        return res.status(500).json({error: 'something went wrong'})
    }
    next()
}
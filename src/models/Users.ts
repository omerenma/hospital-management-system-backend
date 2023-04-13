import {client} from '../database/database'
import { Users, Verify, Login, LoginData } from '../utils/types'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export class UsersModel {
    async addUser(user:Users): Promise<Users> {
        try {
            const db_connection = client.connect()
            const checkEmail = `SELECT email FROM users WHERE email=($1)`
            const query_email = await (await db_connection).query(checkEmail, [user.email])
            if( query_email.rows.length > 0){
                throw new Error(`User with email: ${user.email},  already exist.`)
            }else{
                const hash =   bcrypt.hashSync(user.password, 10);
                const sql = 'INSERT INTO users (name, email, role, password) VALUES ($1, $2, $3, $4) RETURNING * ';
                const result = await (await db_connection).query(sql, [user.name,user.email, user.role,  hash])
                const response =  result
                 return response.rows[0]
            }
        } catch (error:any) {
            throw new Error(error)
        }
    }

    async login (email:string, password:string): Promise<LoginData>{
        try {
            const db_connection = client.connect()
            const check_email = `select name, email,role, password from users where email = ($1) `
            const query_email = await (await db_connection).query(check_email, [email])
            if(query_email.rows.length > 0){
               const isMatch = await bcrypt.compare(password, query_email.rows[0].password)
                if(isMatch){
                    return query_email.rows[0]
                }
                throw new Error('Invalid credentials supplied')
            }
            throw new Error('User not found')
        } catch (error:any) {
            throw new Error(error)
        } 
    }

    // Get all users
    async getUsers (): Promise <Users[]> {
        try {
         const db_connection = client.connect()
         const sql = `SELECT * FROM users`
         const query = await (await db_connection).query(sql)
         return query.rows
        } catch (error:any) {
         return error
        }
    }

    // Delete user

    async deleteUser (id:number): Promise<Users> {
        try {
            const db_connection = client.connect()
            const query_id = `DELETE  FROM users WHERE id =($1)`
            const sql = await (await db_connection).query(query_id, [id])
            return sql.rows[0]
        } catch (error:any) {
            return error
        }
    }

     // UPDATE user

     async editUser (id:string, name?:string, email?:string, role?:string ): Promise<[]> {
        try {
            const db_connection = client.connect()
            const query = `UPDATE users SET name, email, role WHERE id = ($1)`
            const sql = await (await db_connection).query(query, [id, name, email, role])
            if (sql.rows.length > 0 ) {
                return sql.rows[0].id
            }
                return sql.rows[0]
        } catch (error:any) {
            return error
        }
    }

       // Get Doctors
       async getDoctors (): Promise <Users[]> {
        try {
         const db_connection = client.connect()
         const sql = `SELECT * FROM users WHERE role = 'doctor' `
         const query = await (await db_connection).query(sql)
         return query.rows
        } catch (error:any) {
         return error
        }
    }

}
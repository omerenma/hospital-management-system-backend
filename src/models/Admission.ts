import {client} from '../database/database'
import { Admission, GetAdmission } from '../interface/Admission';

export class AdmissionModel {
    async createAdmission(user:Admission): Promise<[]> {
        console.log("USER :", user)
        try {
                const db_connection = client.connect()
                // const queryId = `SELECT * FROM patients WHERE patients_id = ($1)`
                // const query = (await db_connection).query(queryId, [user.patients_id])
                // console.log(query, 'PATIENTS ID')
                const sql = 'INSERT INTO admissions (admission_date, discharged_date, patients_id ) VALUES ($1, $2, $3) RETURNING * ';
                const result = await (await db_connection).query(sql, [ user.admission_date, user.discharged_date, user.patients_id])
                const response =  result
                 return response.rows[0]
            
        } catch (error:any) {
            console.log("ERROR :", error.message)
            throw new Error(error)
        }
    }

    async getAdmission ():Promise<GetAdmission[]> {
        try {
            const db_connection = await client.connect()
            const sql = "select * from admissions join patients on patients.patients_id = admissions.patients_id";
            const result = await db_connection.query(sql)
            const response = result
            return response.rows
            
        } catch (error:any) {
            return error
        }
    }

}
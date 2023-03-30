import {client} from '../database/database'
import { Appointment } from '../interface/Appointment';

export class AppointmentModel {
    async addAppointment(user:Appointment): Promise<[]> {
        try {
                const db_connection = client.connect()
                const sql = 'INSERT INTO appointments; (patient_name, patient_email, doctor_email, date) VALUES ($1, $2, $3, $4) RETURNING * ';
                const result = await (await db_connection).query(sql, [user.id, user.patient_email, user.doctor_email, user.patient_email, user.date])
                const response =  result
                 return response.rows[0]
            
        } catch (error:any) {
            throw new Error(error)
        }
    }

}
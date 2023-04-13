import { client } from "../database/database";
import { Patient, UpdatePatient } from "../interface/Patient";

export class PatientModel {
  async addPatient(user: Patient): Promise<{message:string}> {
    try {
      const db_connection = client.connect();
      const sql = "INSERT INTO patients (name, residential_address,  room_admitted,  admission_no, id_no, email, phone_no, next_of_kin_name, next_of_kin_phone_no, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING * ";
      const result = await (await db_connection).query(sql, [user.name, user.residential_address, user.room_admitted, user.admission_no, user.id_no, user.email, user.phone_no, user.next_of_kin_name, user.next_of_kin_phone_no, user.status]);
      const response = result;
      return response.rows[0];
    } catch (error: any) {
      throw new Error(error);
    }
  }

  // Delete patient
  async deletePatient(id: string): Promise<Patient> {
    try {
      const db_connection = client.connect();
      const query_id = `SELECT id from patients WHERE id =($1)`;
      const sql = await (await db_connection).query(query_id, [id]);
      if (sql.rows.length > 0) {
        return sql.rows[0].id;
      }
      return sql.rows[0];
    } catch (error: any) {
      return error;
    }
  }

  // UPDATE patient

  async editPatient(user:UpdatePatient): Promise<UpdatePatient> {
    try {
      const db_connection = client.connect();
      const query = `UPDATE patients SET (status) = ($1)  WHERE id = ${user.id}`;
      const sql = await (
        await db_connection
      ).query(query, [user.id, user.status ]);
      if (sql.rows.length > 0) {
        return sql.rows[0].id;
      }
      return sql.rows[0];
    } catch (error: any) {
      return error;
    }
  }

  // Get Patient
  async getPatients(): Promise<Patient[]> {
    try {
      const db_connection = client.connect();
      const sql = `SELECT * FROM patients`;
      const query = await (await db_connection).query(sql);
      return query.rows
    } catch (error: any) {
      return error;
    }
  }
  async getPatientsById(id:string): Promise<Patient> {
    try {
      const db_connection = client.connect();
      const sql = `SELECT * FROM patients WHERE id = $($1)`;
      const query = await (await db_connection).query(sql, [id]);
      return query.rows[0];
    } catch (error: any) {
      return error;
    }
  }
  
}


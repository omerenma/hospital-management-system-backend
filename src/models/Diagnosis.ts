import { client } from "../database/database";
import { Diagnosis, UpdateDiagnosis } from "../interface/Diagnosis";

export class DiagnosismentModel {
  async addDiagnosis(user: Diagnosis): Promise<Diagnosis> {
    try {
      const db_connection = client.connect();
      const sql =
        "INSERT INTO diagnosis (treatment_name, drug_administered, doctor_name, patient_email, bill, data, paid, description,  patient_status,  doctor_email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING * ";
      const result = await (
        await db_connection
      ).query(sql, [
        user.bill,
        user.date,
        user.description,
        user.doctor_email,
        user.doctor_name,
        user.drug_administered,
        user.paid,
        user.patient_email,
        user.patient_status,
        user.treatment_name,
      ]);
      const response = result;
      return response.rows[0];
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async updateDiagnosis(user:UpdateDiagnosis): Promise<UpdateDiagnosis> {
    try {
      const db_connection =await client.connect();

      const query = `UPDATE diagnosis SET (bill,
        date,
        description,
        doctor_email,
        doctor_name,
        drug_administered,
        paid,
        patient_email,
        patient_status,
        treatment_name) = ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)  WHERE id = ${user.id}`;

      const sql = await ( db_connection).query(query, [
        user.bill,
        user.date,
        user.description,
        user.doctor_email,
        user.doctor_name,
        user.drug_administered,
        user.paid,
        user.patient_email,
        user.patient_status,
        user.treatment_name
      ]);
      if (sql.rows.length > 0) {
        return sql.rows[0].id;
      }
      return sql.rows[0];
    } catch (error: any) {
      return error;
    }
  }

    async getPatientDiagnosis(email:string):Promise<Diagnosis> {
        try {
            const db_connection = client.connect()
            const sql = `SELECT * FROM diagnosis WHERE email = ${email}`
            const query = await (await db_connection).query(sql, [email])
            if(!query.rows){
               "No record found"
            }
            return query.rows[0]
           } catch (error:any) {
            return error
           }
    }
}

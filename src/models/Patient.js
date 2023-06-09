"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientModel = void 0;
const database_1 = require("../database/database");
class PatientModel {
    async addPatient(user) {
        try {
            const db_connection = database_1.client.connect();
            const sql = "INSERT INTO patients (patients_name, sex, dob,residential_address, date, email, phone_no, next_of_kin_name, next_of_kin_phone_no) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING * ";
            const result = await (await db_connection).query(sql, [
                user.patients_name,
                user.sex,
                user.dob,
                user.residential_address,
                user.date,
                user.email,
                user.phone_no,
                user.next_of_kin_name,
                user.next_of_kin_phone_no,
            ]);
            const response = result;
            return response.rows[0];
        }
        catch (error) {
            throw new Error(error);
        }
    }
    // Delete patient
    async deletePatient(id) {
        try {
            const db_connection = database_1.client.connect();
            const query_id = `SELECT id from patients WHERE id =($1)`;
            const sql = await (await db_connection).query(query_id, [id]);
            if (sql.rows.length > 0) {
                return sql.rows[0].id;
            }
            return sql.rows[0];
        }
        catch (error) {
            return error;
        }
    }
    // UPDATE patient
    async editPatient(user) {
        try {
            const db_connection = database_1.client.connect();
            const query = `UPDATE patients SET (status) = ($1)  WHERE id = ${user.id}`;
            const sql = await (await db_connection).query(query, [user.id, user.status]);
            if (sql.rows.length > 0) {
                return sql.rows[0].id;
            }
            return sql.rows[0];
        }
        catch (error) {
            return error;
        }
    }
    // Get Patient
    async getPatients() {
        try {
            const db_connection = database_1.client.connect();
            const sql = `SELECT * FROM patients`;
            const query = await (await db_connection).query(sql);
            return query.rows;
        }
        catch (error) {
            return error;
        }
    }
    async getPatientsById(id) {
        try {
            const db_connection = database_1.client.connect();
            const sql = `SELECT * FROM patients WHERE id = $($1)`;
            const query = await (await db_connection).query(sql, [id]);
            return query.rows[0];
        }
        catch (error) {
            return error;
        }
    }
}
exports.PatientModel = PatientModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF0aWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBhdGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQThDO0FBRzlDLE1BQWEsWUFBWTtJQUN2QixLQUFLLENBQUcsVUFBVSxDQUFDLElBQWE7UUFDOUIsSUFBSTtZQUNGLE1BQU0sYUFBYSxHQUFHLGlCQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkMsTUFBTSxHQUFHLEdBQ1AsNExBQTRMLENBQUM7WUFDL0wsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUNuQixNQUFNLGFBQWEsQ0FDcEIsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO2dCQUNYLElBQUksQ0FBQyxhQUFhO2dCQUNsQixJQUFJLENBQUMsR0FBRztnQkFDUixJQUFJLENBQUMsR0FBRztnQkFDUixJQUFJLENBQUMsbUJBQW1CO2dCQUN2QixJQUFJLENBQUMsSUFBSTtnQkFDVixJQUFJLENBQUMsS0FBSztnQkFDVixJQUFJLENBQUMsUUFBUTtnQkFDYixJQUFJLENBQUMsZ0JBQWdCO2dCQUNyQixJQUFJLENBQUMsb0JBQW9CO2FBQzFCLENBQUMsQ0FBQztZQUNILE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQztZQUN4QixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFBQyxPQUFPLEtBQVUsRUFBRTtZQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELGlCQUFpQjtJQUNqQixLQUFLLENBQUMsYUFBYSxDQUFDLEVBQVU7UUFDNUIsSUFBSTtZQUNGLE1BQU0sYUFBYSxHQUFHLGlCQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkMsTUFBTSxRQUFRLEdBQUcsd0NBQXdDLENBQUM7WUFDMUQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDdkI7WUFDRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEI7UUFBQyxPQUFPLEtBQVUsRUFBRTtZQUNuQixPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVELGlCQUFpQjtJQUVqQixLQUFLLENBQUMsV0FBVyxDQUFDLElBQW1CO1FBQ25DLElBQUk7WUFDRixNQUFNLGFBQWEsR0FBRyxpQkFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZDLE1BQU0sS0FBSyxHQUFHLG1EQUFtRCxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDM0UsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUNoQixNQUFNLGFBQWEsQ0FDcEIsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUN2QjtZQUNELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjtRQUFDLE9BQU8sS0FBVSxFQUFFO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQsY0FBYztJQUNkLEtBQUssQ0FBQyxXQUFXO1FBQ2YsSUFBSTtZQUNGLE1BQU0sYUFBYSxHQUFHLGlCQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkMsTUFBTSxHQUFHLEdBQUcsd0JBQXdCLENBQUM7WUFDckMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQztTQUNuQjtRQUFDLE9BQU8sS0FBVSxFQUFFO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBQ0QsS0FBSyxDQUFDLGVBQWUsQ0FBQyxFQUFVO1FBQzlCLElBQUk7WUFDRixNQUFNLGFBQWEsR0FBRyxpQkFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZDLE1BQU0sR0FBRyxHQUFHLHlDQUF5QyxDQUFDO1lBQ3RELE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QjtRQUFDLE9BQU8sS0FBVSxFQUFFO1lBQ25CLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0NBQ0Y7QUFoRkQsb0NBZ0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uL2RhdGFiYXNlL2RhdGFiYXNlXCI7XHJcbmltcG9ydCB7IFBhdGllbnQsIFVwZGF0ZVBhdGllbnQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlL1BhdGllbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRpZW50TW9kZWwge1xyXG4gIGFzeW5jICAgYWRkUGF0aWVudCh1c2VyOiBQYXRpZW50KTogUHJvbWlzZTx7IG1lc3NhZ2U6IHN0cmluZyB9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYl9jb25uZWN0aW9uID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICAgICAgY29uc3Qgc3FsID1cclxuICAgICAgICBcIklOU0VSVCBJTlRPIHBhdGllbnRzIChwYXRpZW50c19uYW1lLCBzZXgsIGRvYixyZXNpZGVudGlhbF9hZGRyZXNzLCBkYXRlLCBlbWFpbCwgcGhvbmVfbm8sIG5leHRfb2Zfa2luX25hbWUsIG5leHRfb2Zfa2luX3Bob25lX25vKSBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0LCAkNSwgJDYsICQ3LCAkOCwgJDkpIFJFVFVSTklORyAqIFwiO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCAoXHJcbiAgICAgICAgYXdhaXQgZGJfY29ubmVjdGlvblxyXG4gICAgICApLnF1ZXJ5KHNxbCwgW1xyXG4gICAgICAgIHVzZXIucGF0aWVudHNfbmFtZSxcclxuICAgICAgICB1c2VyLnNleCxcclxuICAgICAgICB1c2VyLmRvYixcclxuICAgICAgICB1c2VyLnJlc2lkZW50aWFsX2FkZHJlc3MsXHJcbiAgICAgICAgIHVzZXIuZGF0ZSxcclxuICAgICAgICB1c2VyLmVtYWlsLFxyXG4gICAgICAgIHVzZXIucGhvbmVfbm8sXHJcbiAgICAgICAgdXNlci5uZXh0X29mX2tpbl9uYW1lLFxyXG4gICAgICAgIHVzZXIubmV4dF9vZl9raW5fcGhvbmVfbm8sXHJcbiAgICAgIF0pO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IHJlc3VsdDtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLnJvd3NbMF07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBEZWxldGUgcGF0aWVudFxyXG4gIGFzeW5jIGRlbGV0ZVBhdGllbnQoaWQ6IHN0cmluZyk6IFByb21pc2U8UGF0aWVudD4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGJfY29ubmVjdGlvbiA9IGNsaWVudC5jb25uZWN0KCk7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5X2lkID0gYFNFTEVDVCBpZCBmcm9tIHBhdGllbnRzIFdIRVJFIGlkID0oJDEpYDtcclxuICAgICAgY29uc3Qgc3FsID0gYXdhaXQgKGF3YWl0IGRiX2Nvbm5lY3Rpb24pLnF1ZXJ5KHF1ZXJ5X2lkLCBbaWRdKTtcclxuICAgICAgaWYgKHNxbC5yb3dzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4gc3FsLnJvd3NbMF0uaWQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNxbC5yb3dzWzBdO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBVUERBVEUgcGF0aWVudFxyXG5cclxuICBhc3luYyBlZGl0UGF0aWVudCh1c2VyOiBVcGRhdGVQYXRpZW50KTogUHJvbWlzZTxVcGRhdGVQYXRpZW50PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYl9jb25uZWN0aW9uID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICAgICAgY29uc3QgcXVlcnkgPSBgVVBEQVRFIHBhdGllbnRzIFNFVCAoc3RhdHVzKSA9ICgkMSkgIFdIRVJFIGlkID0gJHt1c2VyLmlkfWA7XHJcbiAgICAgIGNvbnN0IHNxbCA9IGF3YWl0IChcclxuICAgICAgICBhd2FpdCBkYl9jb25uZWN0aW9uXHJcbiAgICAgICkucXVlcnkocXVlcnksIFt1c2VyLmlkLCB1c2VyLnN0YXR1c10pO1xyXG4gICAgICBpZiAoc3FsLnJvd3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiBzcWwucm93c1swXS5pZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3FsLnJvd3NbMF07XHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEdldCBQYXRpZW50XHJcbiAgYXN5bmMgZ2V0UGF0aWVudHMoKTogUHJvbWlzZTxQYXRpZW50W10+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRiX2Nvbm5lY3Rpb24gPSBjbGllbnQuY29ubmVjdCgpO1xyXG4gICAgICBjb25zdCBzcWwgPSBgU0VMRUNUICogRlJPTSBwYXRpZW50c2A7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gYXdhaXQgKGF3YWl0IGRiX2Nvbm5lY3Rpb24pLnF1ZXJ5KHNxbCk7XHJcbiAgICAgIHJldHVybiBxdWVyeS5yb3dzO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGdldFBhdGllbnRzQnlJZChpZDogc3RyaW5nKTogUHJvbWlzZTxQYXRpZW50PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYl9jb25uZWN0aW9uID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICAgICAgY29uc3Qgc3FsID0gYFNFTEVDVCAqIEZST00gcGF0aWVudHMgV0hFUkUgaWQgPSAkKCQxKWA7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gYXdhaXQgKGF3YWl0IGRiX2Nvbm5lY3Rpb24pLnF1ZXJ5KHNxbCwgW2lkXSk7XHJcbiAgICAgIHJldHVybiBxdWVyeS5yb3dzWzBdO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
import {Request, Response} from 'express'
import { appointmentSchema } from '../helpers/appointmentVallidation';
import { AppointmentModel } from '../models/Appointment';

const appointment = new AppointmentModel()
export const createAppointment = async (req:Request, res:Response) => {
    try {
        const { patient_name, doctor_email, date, patient_email } = req.body;
        const { error, value } = appointmentSchema.validate(req.body);
        if (error) {
          return res.status(400).json({ message: error.details[0].message });
        }
        const data = { patient_name, doctor_email, date, patient_email};
        const query = await appointment.addAppointment(data);
        res
          .status(201)
          .json({ message: "New user registered successfully", data: query });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
      }
}
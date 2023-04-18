import {Request, Response} from 'express'
import { AdmissionModel } from '../models/Admission';
import { admissionSchema } from '../helpers/admissionValidation';
import { json } from 'body-parser';

export const createAdmission = async (req:Request, res:Response) => {
  const admission = new AdmissionModel()
    try {
        const { 
            admission_date, 
            discharged_date,
        } = req.body;
        const patients_id = JSON.parse(req.body.patients_id)
        const { error, value } = admissionSchema.validate(req.body);
        if (error) {
          return res.status(400).json({ message: error.details[0].message });
        }
        const data = { admission_date, discharged_date, patients_id};
        const query = await admission.createAdmission(data);
        res.status(201).json({ message: `Patient has been admitted `, data: query });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
      }
}

export const getAdmission = async (_req:Request, res:Response) => {
  const admission = new AdmissionModel()
  try {
    const response = await admission.getAdmission()
    return res.status(200).json(response)
  } catch (error) {
    res.status(500).json({message:"Something went wrong"})
  }

}

import { Request, Response } from "express";
import { PatientModel } from "../models/Patient";
import { patientSchema } from "../helpers/patientValidation";

const patient = new PatientModel();
export const createPatient = async (req: Request, res: Response) => {
  const {
    name,
    dob,
    sex,
    residential_address,
   date,
    email,
    phone_no,
    next_of_kin_name,
    next_of_kin_phone_no,
  } = req.body;


  const { error, value } = patientSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const data = {
    name,
    dob,
    sex,
    email,
    residential_address,
    date,
    phone_no,
    next_of_kin_name,
    next_of_kin_phone_no,
  };
  try {
    const result = await patient.addPatient(data);
    res
      .status(201)
      .json({ message: "Patient added successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete Patient
export const deletPatient = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await patient.deletePatient(id);
    res
      .status(201)
      .json({ message: "Patient deleted successfully", data: result });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// Edit Patient
export const editPatient = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      status,
    } = req.body;
    const data = {id, status};
    const result = await patient.editPatient(data);
    return res.status(200).json({message:"Record updated successfully", data: result });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getPatients = async (req:Request, res:Response) => {
    try {
        const result = await patient.getPatients()
        res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({error})
    }
}

export const getPatientsById = async (req:Request, res:Response) => {
  try {
    const {id} = req.params
      const result = await patient.getPatientsById(id)
      res.status(200).json({data:result})
  } catch (error) {
      return res.status(500).json({error})
  }
}
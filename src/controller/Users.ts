import { Request, Response } from "express";
import { registerSchema, loginSchema } from "../helpers/userValidation";
import { UsersModel } from "../models/Users";
import jwt from "jsonwebtoken";

const user = new UsersModel();
    // Add new user
export const signup = async (req: Request, res: Response) => {
  try {
    const { error, value } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const { name, email, password } = req.body;
    const data = { name, email, password };
    const query = await user.addUser(data);
    res
      .status(201)
      .json({ message: "New user registered successfully", data: query.name });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Signin user
export const signin = async (req: Request, res: Response) => {
  try {
    const { error, value } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    if (value) {
      const { email, password } = req.body;
      const data = { email, password };
      const result = await user.login(data);
      let payload = jwt.sign(
        { payload: result },
        process.env.TOKEN_SECRET as string,
        { expiresIn: "30 minutes" }
      );
      res.status(200).json({ message: "Login successful", data: payload });
    } else {
      return res.status(400).json({ message: "Invalid login credentials" });
    }
  } catch (error: any) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

    // Get all users
    export const getUsers = async (req: Request, res: Response) => {
        try {
            const result = await user.getUsers()
            if (result.length > 0) {
                res.status(200).json({data:result})
            } else {
                res.status(404).json({message:"Not found"})
            }
        } catch (error) {
            res.status(500).json({message: "Failed to fetch records"})
        }
      };

      // Delete user
      export const deleteUser =async (req: Request, res: Response) => {
        try {
            const {id} = req.params
            const result  = await user.deleteUser(id)
            res.status(201).json({message:"User deleted successfully",data: result})
        } catch (error) {
            return res.status(400).json({message: "Something went wrong"})
        }
      }

      // Edit user
      export const editUser = async (req: Request, res: Response) => {
        try {
            const {id} = req.params
            const {name, email, role} = req.body
            const result  = await user.editUser(id, name, email, role )
            res.status(200).json({data: result})
        } catch (error) {
            return res.status(500).json({message: "Something went wrong"})
        }
      }

       // Get all Doctors
    export const getDoctors = async (req: Request, res: Response) => {
        try {
            const result = await user.getDoctors()
            if (result.length > 0) {
                res.status(200).json({data:result})
            } else {
                res.status(404).json({message:"Not found"})
            }
        } catch (error) {
            res.status(500).json({message: "Failed to fetch records"})
        }
      };
    
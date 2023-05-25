"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientSchema = void 0;
const joi = require('joi');
exports.patientSchema = joi.object({
    patients_name: joi.string().required().min(6),
    sex: joi.string().required(),
    dob: joi.string().required(),
    date: joi.string().required(),
    email: joi.string().required().email(),
    residential_address: joi.string().required(),
    phone_no: joi.string().required(),
    next_of_kin_name: joi.string().required(),
    next_of_kin_phone_no: joi.string().required(),
});
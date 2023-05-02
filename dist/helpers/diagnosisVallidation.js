"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.diagnosisSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.diagnosisSchema = joi_1.default.object({
    treatment_name: joi_1.default.string().required(),
    drug_administered: joi_1.default.string().required(),
    doctor_name: joi_1.default.string().required(),
    patient_email: joi_1.default.string().email().exist().required(),
    bill: joi_1.default.string().required(),
    paid: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    patient_status: joi_1.default.string().required(),
    date: joi_1.default.string().required()
});
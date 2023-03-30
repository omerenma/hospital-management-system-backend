"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.appointmentSchema = joi_1.default.object({
    patient_name: joi_1.default.string().required().min(6),
    doctor_email: joi_1.default.string().email().exist().required(),
    patient_email: joi_1.default.string().email().exist().required(),
    date: joi_1.default.string().required()
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patientSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.patientSchema = joi_1.default.object({
    name: joi_1.default.string().required().min(6),
    email: joi_1.default.string().required().email(),
    residential_address: joi_1.default.string().required(),
    room_admitted: joi_1.default.string().required(),
    admission_no: joi_1.default.string().required(),
    id_no: joi_1.default.string().required(),
    phone_no: joi_1.default.string().required(),
    next_of_kin_name: joi_1.default.string().required(),
    next_of_kin_phone_no: joi_1.default.string().required(),
    status: joi_1.default.string().required(),
});
